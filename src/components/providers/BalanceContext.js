import createDataContext from "./createDataContext";
import { firebase } from "../../firebase";

const balanceReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "createbBalance":
      return { ...state, balance: [...balance, action.payload] };
    case "getBalance":
      return { ...state, balance: action.payload };
    case "setCurrentBalance":
      return { ...state, currentbalance: action.payload };
    case "updateBalance":
      return {
        ...state,
        balance: state.balance.map((balance) => {
          if (balance.id === action.payload.balance.id) {
            return {
              ...balance,
              amount: action.payload.balance.amount,
            };
          }

          return balance;
        }),
      };
    default:
      return state;
  }
};

const balanceRef = firebase.firestore().collection("balances");


const createbBalance = (dispatch) => (amount, author) => {
  const data = {
    amount,
    userId: author,
  };

  balanceRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "balance added!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const getBalance = (dispatch) => (userId) => {
  balanceRef.where("userId", "==", userId).onSnapshot(
    (querySnapshot) => {
      const balance = [];

      querySnapshot.forEach((doc) => {
        const balance = doc.data();
        balance.id = doc.id;
        balance.push(balance);
      });
      dispatch({ type: "getBalance", payload: balance });
      dispatch({ type: "errorMessage", payload: "Your balance is saved!" });
    },
    (error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    }
  );
};

const clearMessage = (dispatch) => () => {
  dispatch({ type: "errorMessage", payload: "" });
};

const setCurrentBalance = (dispatch) => (balance) => {
  dispatch({ type: "setCurrentBalance", payload: balance });
};

const updateBalance = (dispatch) => (id, amount) => {
  balanceRef
    .doc(id)
    .update({ amount })
    .then(() => {
      dispatch({
        type: "updateBalance",
        payload: { balance: { id, amount } },
      });
      dispatch({ type: "errorMessage", payload: "balance updated!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

export const { Provider, Context } = createDataContext(
  balanceReducer,
  {
    createbBalance,
    getBalance,
    setCurrentBalance,
    updateBalance,
    clearMessage,
  },
  {
    balance: [],
    errorMessage: "",
    currentbalance: { id: "", amount: "" },
  }
);
