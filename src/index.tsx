import { View, TextInput, ImageSourcePropType } from "react-native";
import React from "react";
interface props {
  placeholder?: string;
  value?: string;
  source?: ImageSourcePropType;
  keyboardType?: any;
  maxLength?: number;
  onChangeText?: any;
  secureTextEntry?: boolean;
  onPress?: any;
  marginTop?: any;
  flexDirection?: boolean;
  borderWidth?: number;
  height?: string;
  width?: string;
  borderRadius?: number;
  borderColor?: string;
}
const InputField = (props: props) => {
  const {
    placeholder,
    value,
    source,
    keyboardType,
    maxLength,
    onChangeText,
    secureTextEntry,
    marginTop,
    flexDirection,
    borderWidth,
    height,
    width,
    borderRadius,
    borderColor,
  } = props;
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          width: width ? width : "80%",
          marginTop: marginTop ? marginTop : undefined,
          flexDirection: flexDirection ? "row-reverse" : "row",
          borderWidth: borderWidth ? borderWidth : 1,
          height: height ? height : 45,
          borderRadius: borderRadius ? borderRadius : undefined,
          borderColor: borderColor ? borderColor : "black",
        },
        ,
      ]}
    >
      <TextInput
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        returnKeyType={"done"}
        style={{ fontSize: 18, color: "black", width: "95%" }}
        value={value}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        numberOfLines={1}
      />
    </View>
  );
};
export default InputField;
