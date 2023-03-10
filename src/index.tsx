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
} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
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
  NextRef:any;
  ReturnKeyType:ReturnKeyType;
  onSubmitEditing:any,
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
    onSubmitEditing
  } = props;

  return (
    <>
      <View
        style={[
          containerStyle,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
          },
        ]}>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              overflow: 'hidden',
            },
          ]}>
          {showLogo && (
            <View style={{alignItems: 'center'}}>
              <Image style={iconStyle} source={source} />
            </View>
          )}
          <Controller
            name={name}
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
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
     
              />
            )}
          />
        </View>
        {showIcon && (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setVisible(!visible)}>
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
  errorMsg: {color: 'red'},
});
