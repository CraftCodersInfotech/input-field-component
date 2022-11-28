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

| Name         | Type              | Description       |
| :----------- | :---------------- | :---------------- |
| placeholder  | string (Require)  | Formik field name |
| height       | number (Optional) | Default is `0`    |
| width        | string (Optional) | Default is `0`    |
| borderWidth  | number (Optional) | Default is `1`    |
| borderRadius | number (Optional) | Default is `0`    |

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
