import Constant from "expo-constants";
const ENV = {
  dev: {
    apiKey: "AIzaSyDqIWnxYZJSXnTXFTAfoABVmcn1Bl6U3AM",
    authDomain: "piggybank-42f3f.firebaseapp.com",
    projectId: "piggybank-42f3f",
    storageBucket: "piggybank-42f3f.appspot.com",
    messagingSenderId: "665465383907",
    appId: "1:665465383907:web:cd9c90663bfa5606f24ed6"
  },
  production: {
    apiKey: "AIzaSyDqIWnxYZJSXnTXFTAfoABVmcn1Bl6U3AM",
    authDomain: "piggybank-42f3f.firebaseapp.com",
    projectId: "piggybank-42f3f",
    storageBucket: "piggybank-42f3f.appspot.com",
    messagingSenderId: "665465383907",
    appId: "1:665465383907:web:cd9c90663bfa5606f24ed6"
  },
};
const getEnvVars = (env = Constant.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVars;