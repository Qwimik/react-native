import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import addImg from "../assets/images/add.png";
import { useState } from "react";

const RegistrationScreen = () => {
  const [passShow, setPassShow] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium });
  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.regContainer}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View
            style={{
              ...styles.regWrapper,
              marginTop: isShowKeyboard ? 147 : 263,
            }}
          >
            <View style={styles.avatarContainer}>
              <Image source={addImg} style={styles.addImg} />
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.h1}>Registration</Text>
              <View style={styles.fromWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Login"
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <View style={styles.passContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!passShow}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                  <Text
                    style={styles.passText}
                    onPress={() => {
                      setPassShow((pS) => (pS === false ? true : false));
                    }}
                  >
                    {passShow ? "Hide" : "Show"}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.regBtn}
                  onPress={keyboardHide}
                >
                  <Text style={styles.regBtnText}>Registration</Text>
                </TouchableOpacity>
                <Text style={styles.linkToLogin}>
                  Already have an account? Login
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  regContainer: {
    flex: 1,
  },
  regWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  addImg: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    position: "absolute",
    bottom: 14,
    right: 0,
    transform: [{ translateX: 12.5 }],
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 92,
    paddingHorizontal: 16,
  },
  h1: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    color: "#212121",
  },
  fromWrapper: {
    flex: 1,
    marginTop: 32,
    marginBottom: 40,
    gap: 16,
  },
  input: {
    backgroundColor: "#f6f6f6",
    padding: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: 8,
    color: "#212121",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  passContainer: {
    position: "relative",
  },
  passText: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: Platform.OS === "ios" ? 16 : 20,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
    textDecorationLine: "underline",
    zIndex: 10,
  },
  regBtn: {
    backgroundColor: "#ff6c00",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginTop: 32,
  },
  regBtnText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  linkToLogin: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1b4371",
  },
});

export default RegistrationScreen;
