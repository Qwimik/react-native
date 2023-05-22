// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
// } from "react-native";

// import bgImg from "../assets/images/PhotoBG.jpg";
// import addImg from "../assets/images/add.png";
// import {
//   useFonts,
//   Roboto_500Medium,
//   Roboto_400Regular,
// } from "@expo-google-fonts/roboto";

// const RegistrationScreen = () => {
//   const [fontsLoaded] = useFonts({ Roboto_500Medium, Roboto_400Regular });
//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <View>
//       <ImageBackground source={bgImg} style={styles.bgImgStyle}>
//         <View style={styles.container}>
//           <View style={{ flex: 1 }}></View>
//           <View style={styles.contentContainer}>
//             <View style={styles.avatarContainer}>
//               <Image source={addImg} style={styles.addImg} />
//             </View>
//             <Text style={styles.h1}>Registration</Text>
//             <View style={styles.form}>
//               <TextInput placeholder="Login" style={styles.input} />
//               <TextInput placeholder="Email" style={styles.input} />
//               <View style={styles.passContainer}>
//                 <TextInput placeholder="Password" style={styles.input} />
//                 <Text style={styles.passShowText}>Show</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: "relative",
//     fontFamily: "Roboto_400Regular",
//   },
//   bgImgStyle: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//   },
//   avatarContainer: {
//     width: 120,
//     height: 120,
//     backgroundColor: "#f6f6f6",
//     borderRadius: 16,
//     position: "absolute",
//     left: "50%",
//     transform: [{ translateX: -50 }, { translateY: -60 }],
//     zIndex: 10,
//   },
//   addImg: {
//     width: 25,
//     height: 25,
//     position: "absolute",
//     right: 0,
//     bottom: 14,
//     transform: [{ translateX: 12.5 }],
//   },
//   contentContainer: {
//     width: "100%",
//     backgroundColor: "#fff",
//     flex: 2,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingTop: 92,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
//   h1: {
//     textAlign: "center",
//     fontFamily: "Roboto_500Medium",
//     fontWeight: 500,
//     fontSize: 30,
//     lineHeight: 35,
//     color: "#212121",
//   },
//   form: {
//     marginTop: 32,
//     marginBottom: 43,
//     gap: 16,
//   },
//   input: {
//     backgroundColor: "#f6f6f6",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "#e8e8e8",
//     borderRadius: 8,
//     padding: 16,
//   },
//   passContainer: {
//     position: "relative",
//   },
//   passShowText: {
//     position: "absolute",
//     top: "50%",
//     right: 16,
//     transform: [{ translateY: -10 }],
//     textDecorationLine: "underline",
//     color: "#1b4371",
//     fontSize: 16,
//     lineHeight: 19,
//   },
// });

// export default RegistrationScreen;
