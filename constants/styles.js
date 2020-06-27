import { Dimensions, PixelRatio } from "react-native";

export const COLORS = {
  MAINCOLOR: {
    BLUE: "#62ccf4",
    DARKBLUE: "#307D7E",
    LIGHTGREY: "#F5F5F5"
  },
  WHITE: {
    WHITE: "#FFFFFF"
  },
  BLACK: {
    LIGHTBLACK: "#4e4d4d",
    DARKBLACK: "#00000",
    LIGHTGREY: "#D3D3D3",
    GREY: "#A9A9A9",
    LIGHTISGREY: "#E8E8E8",
    lGrey: "#F8F8F8"
  },
  LIGHTBLUE: {
    LIGHTBLUE: "#ADD8E6"
  },
  RED: {
    RED: "#FF0000"
  }
};

export const SIZE = {
  LARGE: 30,
  MINLARGE: 20,
  MEDIUM: 15,
  SMALL: 10
};

export const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get("window").width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
export const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get("window").height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
