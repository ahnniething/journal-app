import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import { useDB } from "../context";

const View = styled.View`
  flex: 1;
  padding: 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const Home = ({ navigation: { navigate } }) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState(realm.objects("Feeling"));
  useEffect(() => {
    const happy = feelings.filtered("emotion = '🥰' ");
    console.log(happy);
  }, []);
  return (
    <View>
      <Title>My journal</Title>
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color={colors.btnTintColor} size={40} />
      </Btn>
    </View>
  );
};

export default Home;
