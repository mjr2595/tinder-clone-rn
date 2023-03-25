import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import tw from "tailwind-rn";
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
