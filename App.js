import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import store from "./src/redux/store";
import AddTaskScreen from "./src/screens/AddTaskScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Screen name="Home" component={HomeScreen} />     
        {/* <Stack.Screen name="AddTask" component={AddTaskScreen} />      */}
      </NavigationContainer>      
    </Provider>
  );
};

export default App;
