import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  KeyboardType,
} from "react-native";
import * as React from "react";
import { useState } from "react";

interface props {
  placeholder?: string;
  value?: string;
  keyboardType?: KeyboardType;
  maxLength?: number;
  onChangeText?: () => void;
  secureTextEntry?: boolean;
  onPress?: () => void;
  showIcon?: boolean;
  containerStyle: StyleProp<ViewStyle>;
  inputStyle: StyleProp<ViewStyle>;
}

const InputField = (props: props) => {
  const [visible, setVisible] = useState(false);
  const {
    placeholder, //The string that will be rendered before text input has been entered.
    value, //The value to show for the text input.
    keyboardType, //Determines which keyboard to open, e.g.numeric,default,number-pad,decimal-pad,email-address,phone-pad,url
    maxLength, // maximum number of characters that can be entered.
    onChangeText, //Called when the text input's text changes.
    showIcon, //When to show image by side textInput
    containerStyle, //Give style to main view
    inputStyle, // Give style to TextInput
  } = props;

  return (
    <View style={[{ ...containerStyle, flexDirection: "row" }]}>
      <TextInput
        secureTextEntry={visible}
        onChangeText={onChangeText}
        returnKeyType={"done"}
        style={inputStyle} //use it when use icon
        value={value}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        numberOfLines={1}
      />
      {showIcon && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View>
            {visible ? (
              <Image
                style={style.eyeClose}
                source={require("../src/assets/eyeClose.png")}
              />
            ) : (
              <Image
                style={style.eyeOpen}
                source={require("../src/assets/eyeOpen.png")}
              />
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default InputField;

const style = StyleSheet.create({
  eyeClose: { height: 26, width: 28 },
  eyeOpen: { height: 30, width: 30 },
});
