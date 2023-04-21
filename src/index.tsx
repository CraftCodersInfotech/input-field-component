// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   ViewStyle,
//   StyleProp,
//   KeyboardType,
//   Text,
// } from "react-native";
// import * as React from "react";
// import { useState } from "react";
// import { Control, Controller, FieldValues } from "react-hook-form";
// interface props {
//   placeholder?: string;
//   value?: string;
//   keyboardType?: KeyboardType;
//   maxLength?: number;
//   onChangeText?: () => void;
//   secureTextEntry?: boolean;
//   onPress?: () => void;
//   showIcon?: boolean;
//   containerStyle: StyleProp<ViewStyle>;
//   inputStyle: StyleProp<ViewStyle>;
//   control: Control<FieldValues, any>;
//   errors: any;
//   name: string;
// }
// const InputField = (props: props) => {
//   const [visible, setVisible] = useState(false);
//   const {
//     placeholder, //The string that will be rendered before text input has been entered.
//     value, //The value to show for the text input.
//     keyboardType, //Determines which keyboard to open, e.g.numeric,default,number-pad,decimal-pad,email-address,phone-pad,url
//     maxLength, // maximum number of characters that can be entered.
//     onChangeText, //Called when the text input's text changes.
//     showIcon, //When to show image by side textInput
//     containerStyle, //Give style to main view
//     inputStyle, // Give style to TextInput
//     control,
//     errors,
//     name,
//   } = props;
//   return (
//     <>
//       <View
//         style={[containerStyle, { flexDirection: "row", paddingHorizontal: 5 }]}
//       >
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { onBlur, onChange, value } }) => (
//             <TextInput
//               secureTextEntry={visible}
//               onChangeText={onChange}
//               returnKeyType={"done"}
//               style={inputStyle} //use it when use icon
//               value={value}
//               keyboardType={keyboardType}
//               maxLength={maxLength}
//               placeholder={placeholder}
//               placeholderTextColor={"gray"}
//               numberOfLines={1}
//               onBlur={onBlur}

//             />
//           )}
//         ></Controller>
//         {showIcon && (
//           <TouchableOpacity onPress={() => setVisible(!visible)}>
//             <View>
//               {visible ? (
//                 <Image
//                   style={style.eyeClose}
//                   source={require("../src/assets/eyeClose.png")}
//                 />
//               ) : (
//                 <Image
//                   style={style.eyeOpen}
//                   source={require("../src/assets/eyeOpen.png")}
//                 />
//               )}
//             </View>
//           </TouchableOpacity>
//         )}
//       </View>
//       {errors && <Text style={style.errorMsg}>{errors[name]?.message}</Text>}
//     </>
//   );
// };
// export default InputField;
// const style = StyleSheet.create({
//   eyeClose: { height: 30, width: 30 },
//   eyeOpen: { height: 30, width: 30 },
//   errorMsg: { color: "red" },
// });

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  KeyboardType,
  Text,
  ImageSourcePropType,
  ImageStyle,
  ReturnKeyType,
} from "react-native";
import * as React from "react";
import { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
interface props {
  placeholder?: string;
  value?: string;
  keyboardType?: KeyboardType;
  maxLength?: number;
  onChangeText?: () => void;
  secureTextEntry?: boolean;
  onPress?: () => void;
  showIcon?: boolean;
  showLogo?: boolean;
  containerStyle: StyleProp<ViewStyle>;
  inputStyle: StyleProp<ViewStyle>;
  control?: Control<FieldValues, any>;
  errors?: any;
  name: string;
  source?: ImageSourcePropType;
  iconStyle: StyleProp<ImageStyle>;
  showPasswordIcon?: ImageSourcePropType;
  hidePasswordIcon?: ImageSourcePropType;
  passwordIconStyle: StyleProp<ImageStyle>;
  placeholderTextColor: any;
  NextRef: any;
  ReturnKeyType: ReturnKeyType;
  onSubmitEditing: any;
  multiline: any;
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
    name,
    showLogo, //When to show image by in starting of textInput
    source, //To add the image in-front of input-fiend
    iconStyle, // To style the icon in input-field
    passwordIconStyle, //To style the password in the end
    showPasswordIcon,
    hidePasswordIcon,
    placeholderTextColor, //to change the color of placeholder
    NextRef,
    ReturnKeyType,
    onSubmitEditing,
    multiline,
  } = props;

  return (
    <>
      <View
        style={[
          containerStyle,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
          },
        ]}
      >
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              overflow: "hidden",
            },
          ]}
        >
          {showLogo && (
            <View style={{ alignItems: "center" }}>
              <Image style={iconStyle} source={source} />
            </View>
          )}
          <Controller
            name={name}
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                secureTextEntry={visible}
                onChangeText={onChange}
                returnKeyType={ReturnKeyType}
                onSubmitEditing={onSubmitEditing}
                style={inputStyle} //use it when use icon
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                numberOfLines={1}
                onBlur={onBlur}
                ref={NextRef}
                multiline={multiline ?? true}
              />
            )}
          />
        </View>
        {showIcon && (
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setVisible(!visible)}
          >
            {visible ? (
              <Image style={passwordIconStyle} source={hidePasswordIcon} />
            ) : (
              <Image style={passwordIconStyle} source={showPasswordIcon} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errors && <Text style={style.errorMsg}>{errors[name]?.message}</Text>}
    </>
  );
};
export default InputField;
const style = StyleSheet.create({
  errorMsg: { color: "red" },
});
