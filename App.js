import { NavigationContainer } from "@react-navigation/native";
import React, {useState} from "react";
import Navigator from "./navigator";
import Realm from "realm";
import AppLoading from "expo-app-loading";

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

const Context = React.createContext();

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] =useState(null);
  const startLoading = async () => {
    const connection = await Realm.open({
      path: "journalDB",
      schema: [FeelingSchema],
    });
    setRealm(connection);
  };
  const onFinish = () => setReady(true);
  if (!ready) {
    return (
      <AppLoading
        onError={console.error}
        startAsync={startLoading}
        onFinish={onFinish}
      />
    );
  }
  return (
    <Context.Provider value={realm}>
    <NavigationContainer>
    <Navigator />
  </NavigationContainer>
  </Context.Provider>
  );
}

