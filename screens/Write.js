import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

const View = styled.View`
  flex: 1;
  padding: 50px;
  background-color: ${colors.cardColor};
`;

const Title = styled.Text`
  color: ${colors.cardTitleColor};
  font-size: 20px;
  font-weight: 400;
`;

const Write = () => (
  <View>
    <Title>How do you feel today ? </Title>
  </View>
);
export default Write;
