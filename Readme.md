# react-native-input-field

<b>react-native-input-field</b> is a reusable component which provides set of base elements that can be used across all the apps developed by 101 Digital.

## Table of Content

- [Features](#features)
- [Installation](#installation)
- [API reference](#api-reference)
  - [button](#button)

## Features

- Configure theme data (colors, fonts, button styles, alert styles... )
- Easy to access theme data inside React component
- Easy to use elements as other React Native elements

## Installation

To add the react-native-input-field to React Native app, run this command with tag version

```
npm install https://github.com/CraftCodersInfotech/input-field-component.git
```

Make sure to install pod into react-native Project after linking given command

## API reference

### InputField

| Name            | Type         | Description                                                                                               |
| :-------------- | :----------- | :-------------------------------------------------------------------------------------------------------- |
| placeholder     | string       | The string that will be rendered before text input has been entered.                                      |
| secureTextEntry | boolean      | secureTextEntry                                                                                           |
| onChangeText    | void         | Called when the text input's text changes.                                                                |
| value           | string       | The value to show for the text input.                                                                     |
| keyboardType    | KeyboardType | Determines which keyboard to open, e.g.numeric,default,number-pad,decimal-pad,email-address,phone-pad,url |
| maxLength       | number       | maximum number of characters that can be entered.                                                         |
| showIcon        | boolean      | When to show image by side textInput                                                                      |
| containerStyle  | ViewStyle    | Give style to main view                                                                                   |
| inputStyle      | ViewStyle    | Give style to TextInput                                                                                   |

- Example

```javascript
import TextInput from "react-native-input-field";

const App = () => {
  return (
    <InputField
      placeholder={"User name"}
      containerStyle={{
        height: 40,
        width: "80%",
        borderWidth: 2,
        alignItems: "center",
      }}
      inputStyle={{
        width: "90%",
      }}
      showIcon // Use only when to render image
    />
  );
};
```
