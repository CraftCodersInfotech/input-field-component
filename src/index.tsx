import {
  View,
  TextInput,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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
  showIcon?: boolean;
  icon?: React.ReactNode;
}
const InputField = (props: props) => {
  const [visible, setVisible] = useState(false);
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
    icon,
    showIcon,
  } = props;
  return (
    <View
      style={[
        {
          alignItems: "center",
          width: width ? width : "90%",
          marginTop: marginTop ? marginTop : undefined,
          flexDirection: flexDirection ? "row-reverse" : "row",
          borderWidth: borderWidth ? borderWidth : 1,
          height: height ? height : 45,
          borderRadius: borderRadius ? borderRadius : undefined,
          borderColor: borderColor ? borderColor : "black",
        },
      ]}
    >
      <TextInput
        secureTextEntry={visible}
        onChangeText={onChangeText}
        returnKeyType={"done"}
        style={{ fontSize: 18, color: "black", width: "85%", marginLeft: 5 }}
        value={value}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        numberOfLines={1}
      />
      {showIcon && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          {visible ? (
            <Image
              style={{ height: 20, width: 30, backgroundColor: "black" }}
              source={require("../src/assets/Eye_close.png")}
            />
          ) : (
            <Image
              style={{ height: 40, width: 35, backgroundColor: "black" }}
              source={require("../src/assets/open_eye.jpeg")}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default InputField;
