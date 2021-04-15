import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/navigation";
import { Provider as AuthProvider } from "./src/components/providers/AuthContext";
import { Provider as ExpenseProvider } from "./src/components/providers/ExpenseContext";
import LongTimers from "./src/components/utils/LongTimer";

export default function App() {
  LongTimers();

  return (
    <AuthProvider>
      <ExpenseProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ExpenseProvider>
    </AuthProvider>
  );
}
