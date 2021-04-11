import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/navigation";
import { Provider as AuthProvider } from "./src/components/providers/AuthContext";
import LongTimers from "./src/components/utils/LongTimer";

export default function App() {
  LongTimers();

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
