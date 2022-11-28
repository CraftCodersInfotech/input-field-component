import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
export type props = {
  height?: number;
  width?: string;
  borderWidth?: number;
  borderRadius?: number;
  placeholder: string;
};

const InputField = (props: props) => {
  const { height, width, borderWidth, borderRadius, placeholder } = props;
  return (
    <View
      style={{
        borderRadius: borderRadius ? borderRadius : 0,
        borderWidth: borderWidth ? borderWidth : 1,
        height: height ? height : 0,
        width: width ? width : 0,
        padding: 10,
      }}
    >
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
