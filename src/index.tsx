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
  source: any;
  iconStyle: StyleProp<ImageStyle>;
  passwordIconStyle: StyleProp<ImageStyle>;
  placeholderTextColor: any;
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
    placeholderTextColor, //to change the color of placeholder
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
                returnKeyType={'done'}
                style={inputStyle} //use it when use icon
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                numberOfLines={1}
                onBlur={onBlur}
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
              <Image
                style={passwordIconStyle}
                source={require('../src/assets/eyeClose.png')}
              />
            ) : (
              <Image
                style={passwordIconStyle}
                source={require('../src/assets/eyeOpen.png')}
              />
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
