import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [passShow, setPassShow] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [user, setUser] = useState(initialState);

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    keyboardHide();
    console.log(user);
    setUser(initialState);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.regContainer}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}></View>
          <View style={styles.regWrapper}>
            <View style={styles.contentWrapper}>
              <Text style={styles.h1}>Login</Text>
              <View style={styles.fromWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setUser((pS) => ({ ...pS, email: value }))
                  }
                  value={user.email}
                />
                <View style={styles.passContainer}>
                  <View style={styles.passContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      secureTextEntry={!passShow}
                      onFocus={() => setIsShowKeyboard(true)}
                      onChangeText={(value) =>
                        setUser((pS) => ({ ...pS, password: value }))
                      }
                      value={user.password}
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
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.regBtn}
                  onPress={onSubmit}
                >
                  <Text style={styles.regBtnText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.linkToLogin}>
                  Don't have an account? Registration
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
    flex: 1.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 32,
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
    marginTop: 42,
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

export default LoginScreen;
