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
npm install react-native-input-field
```

Make sure to install pod into react-native Project after linking given command

## API reference

### InputField

| Name            | Type    | Description            |
| :-------------- | :------ | :--------------------- |
| height          | number  | Default is `0`         |
| width           | string  | Default is `0`         |
| marginTop       | number  | Default is `undefined` |
| flexDirection   | boolean | Default is `row`       |
| borderWidth     | number  | Default is `1`         |
| borderRadius    | number  | Default is `undefined` |
| borderColor     | string  | Default is `black`     |
| secureTextEntry | boolean | secureTextEntry        |
| onChangeText    | boolean | onChangeText           |
| value           | string  | value                  |
| keyboardType    | any     | keyboardType           |
| maxLength       | number  | maxLength of Text      |
| placeholder     | string  | Formik field name      |

- Example

```javascript
import TextInput from "react-native-input-field";

const App = () => {
  return (
    <View>
      <TextInput placeholder={"Formik field name"} />
    </View>
  );
};
```
