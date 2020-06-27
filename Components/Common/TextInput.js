import React from "react";
import { TextInput } from "react-native";

export default function TextField(props) {
  const {
    style,
    onChangeText,
    value,
    inlineImageLeft,
    inlineImagePadding,
    placeholder,
    textContentType,
    secureTextEntry,
    placeholderStyle,
    name
  } = props;
  return (
    <TextInput
      style={style}
      onChangeText={onChangeText}
      value={value}
      name={name}
      inlineImageLeft={inlineImageLeft}
      inlineImagePadding={inlineImagePadding}
      placeholder={placeholder}
      placeholderTextColor="#000"
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      placeholderStyle={placeholderStyle}
    />
  );
}
