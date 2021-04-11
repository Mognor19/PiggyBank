import createDataContext from "./createDataContext";
import { firebase } from "../../firebase";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "createExpense":
      return { ...state, expenses: [...expenses, action.payload] };
    case "getExpenses":
      return { ...state, expenses: action.payload };
    case "setCurrentExpense":
      return { ...state, currentexpense: action.payload };
    case "updateExpense":
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (expense.id === action.payload.expense.id) {
            return {
              ...expense,
              title: action.payload.expense.title,
              amount: action.payload.expense.amount,
              date: action.payload.expense.date,
            };
          }

          return expense;
        }),
      };
    default:
      return state;
  }
};

const expensesRef = firebase.firestore().collection("expenses");

const createExpense = (dispatch) => (title, amount, date, author) => {
  const data = {
    title,
    amount,
    date,
    userId: author,
  };

  expensesRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "expense added!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const getExpenses = (dispatch) => (userId) => {
  expensesRef
    .where("userId", "==", userId)
    .orderBy("date", "desc")
    .onSnapshot(
      (querySnapshot) => {
        const expenses = [];

        querySnapshot.forEach((doc) => {
          const expense = doc.data();
          expense.id = doc.id;
          expenses.push(expense);
        });

        dispatch({ type: "getExpenses", payload: expenses });
        dispatch({ type: "errorMessage", payload: "Your expense is saved!" });
      },
      (error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      }
    );
};

const clearMessage = (dispatch) => () => {
  dispatch({ type: "errorMessage", payload: "" });
};

const setCurrentExpense = (dispatch) => (expense) => {
  dispatch({ type: "setCurrentExpense", payload: expense });
};

const updateExpense = (dispatch) => (id, title, amount, date) => {
  expensesRef
    .doc(id)
    .update({ title, amount, date })
    .then(() => {
      dispatch({
        type: "updateExpense",
        payload: { expense: { id, title, amount, date } },
      });
      dispatch({ type: "errorMessage", payload: "expense updated!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

export const { Provider, Context } = createDataContext(
  expenseReducer,
  {
    createExpense,
    getExpenses,
    setCurrentExpense,
    updateExpense,
    clearMessage,
  },
  {
    expenses: [],
    errorMessage: "",
    currentexpense: { id: "", title: "", amount: "", date: "" },
  }
);