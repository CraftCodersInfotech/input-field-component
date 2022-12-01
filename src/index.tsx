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
import * as yup from "yup";
import { Control, Controller, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
  control: Control<FieldValues, any>;
  errors: any;
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
    control,
    errors,
  } = props;

  return (
    <View
      style={[
        { ...containerStyle, flexDirection: "row", paddingHorizontal: 5 },
      ]}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            secureTextEntry={visible}
            onChangeText={onChange}
            returnKeyType={"done"}
            style={inputStyle} //use it when use icon
            value={value}
            keyboardType={keyboardType}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={"gray"}
            numberOfLines={1}
            onBlur={onBlur}
          />
        )}
      ></Controller>
      {errors && <Text style={inputStyle.errorMsg}>{errors.message}</Text>}
      {/* {errors.name && (
        <Text style={inputStyle.errorMsg}>{errors.name.message}</Text>
      )} */}
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
  eyeClose: { height: 30, width: 30 },
  eyeOpen: { height: 30, width: 30 },
});
