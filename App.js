import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigator from "./navigator";
import Realm from "realm";

const FeelingSchema = {
  name: "Feeling",
  properties:{
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id"
}

export default function App() {
  return (
    <NavigationContainer>
    <Navigator />
  </NavigationContainer>
  );
}

