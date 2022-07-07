import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors"

const View = styled.View`
  flex: 1;
  padding: 0px 50px;
  padding-top: 100px;
  background-color: ${colors.cardColor};`;
const Text = styled.Text``;

const Write = () => (
  <View>
    <Text>Write</Text>
  </View>
);
export default Write;