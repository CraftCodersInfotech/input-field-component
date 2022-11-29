import {
  View,
  TextInput,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
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
  fontSize?: number;
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
    fontSize,
    showIcon,
  } = props;
  return (
    <View
      style={[
        {
          alignItems: "center",
          height: height ? height : 45,
          width: width ? width : "90%",
          marginTop: marginTop ? marginTop : undefined,
          flexDirection: flexDirection ? "row-reverse" : "row",
          borderWidth: borderWidth ? borderWidth : 1,
          borderRadius: borderRadius ? borderRadius : undefined,
          borderColor: borderColor ? borderColor : "black",
        },
      ]}
    >
      <TextInput
        secureTextEntry={visible}
        onChangeText={onChangeText}
        returnKeyType={"done"}
        style={{
          fontSize: fontSize ? fontSize : 15,
          color: "black",
          width: "85%",
          marginLeft: 5,
        }}
        value={value}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        numberOfLines={1}
      />
      {showIcon && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View
            style={{
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {visible ? (
              <Image
                style={{ height: 26, width: 28, backgroundColor: "white" }}
                source={require("../src/assets/eye_2.png")}
              />
            ) : (
              <Image
                style={{ height: 30, width: 30 }}
                source={require("../src/assets/eye_1.png")}
              />
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default InputField;
