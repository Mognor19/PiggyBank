import createDataContext from "./createDataContext";
import { firebase } from "../../firebase";

const authReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, user: action.payload, loggedIn: true };
    case "signout":
      return { ...state, user: action.payload, loggedIn: false };
    case "persistLogin":
      return {
        ...state,
        user: action.payload.user,
        loggedIn: action.payload.loggedIn,
        loading: false,
      };
    case "signup":
      return {
        ...state,
        user: action.payload.user,
        registered: true,
      };
    default:
      return state;
  }
};

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        return true;
      }
    }
  }
  return false;
};

const google = (dispatch) => (googleUser) => {
  const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    if (!isUserEqual(googleUser, firebaseUser)) {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((response) => {
          const uid = response.user.uid;
          const email = response.user.email;
          const fullname = response.user.displayName;
          const pictureUrl = response.user.photoURL;
          const data = {
            id: uid,
            email,
            fullname,
            pictureUrl,
          };
          const usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(uid)
            .get()
            .then((firestoreDocument) => {
              if (!firestoreDocument.exists) {
                usersRef
                  .doc(uid)
                  .set(data)
                  .then(() => {
                    dispatch({
                      type: "signup",
                      payload: { user: data, registered: true },
                    });
                  })
                  .catch((error) => {
                    dispatch({ type: "errorMessage", payload: error.message });
                  });
              } else {
                dispatch({ type: "errorMessage", payload: "" });
                dispatch({ type: "signin", payload: firestoreDocument.data() });
              }
            });
        })
        .catch((error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
};

const editName = (dispatch) => (id, fullname) => {
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({ fullname })
    .then(() => {
      dispatch({
        type: "updateUser",
        payload: { user: { fullname } },
      });
      dispatch({ type: "errorMessage", payload: "user updated!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const signin = (dispatch) => (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;
      const usersRef = firebase.firestore().collection("users");
      usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument) => {
          if (!firestoreDocument.exists) {
            dispatch({
              type: "errorMessage",
              payload: "User does not exist in the database!",
            });
          } else {
            dispatch({ type: "errorMessage", payload: "" });
            dispatch({ type: "signin", payload: firestoreDocument.data() });
          }
        });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const signout = (dispatch) => () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "signout", payload: {} });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const persistLogin = (dispatch) => () => {
  const userRef = firebase.firestore().collection("users");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userRef
        .doc(user.uid)
        .get()
        .then((document) => {
          dispatch({
            type: "persistLogin",
            payload: { user: document.data(), loggedIn: true },
          });
        })
        .catch((error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        });
    } else {
      dispatch({
        type: "persistLogin",
        payload: { user: {}, loggedIn: false },
      });
    }
  });
};

const updateName = (dispatch) => (fullname, id) => {
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({ fullname })
    .then(() => {
      dispatch({ type: "errorMessage", payload: "user updated!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const signup = (dispatch) => (fullname, email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email,
        fullname,
      };
      const usersRef = firebase.firestore().collection("users");
      usersRef
        .doc(uid)
        .set(data)
        .then(() => {
          dispatch({
            type: "signup",
            payload: { user: data, registered: true },
          });
        })
        .catch((error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "errorMessage", payload: "" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    persistLogin,
    signup,
    clearErrorMessage,
    google,
    editName,
  },
  {
    user: {},
    errorMessage: "",
    loggedIn: false,
    loading: true,
    registered: false,
  }
);
