import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

import bg from "./assets/images/PhotoBG.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bgImg}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
  },
});
