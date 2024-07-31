import React from "react";
import {
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";

import UltimosAgendamentos from "../components/agendamento/UltimosAgendamentos";

export default function Inicio() {
  return (
    <ImageBackground
      style={styles.imagemDeFundo}
      source={require("../../assets/inicio/fundo.png")}
    >
      <SafeAreaView style={styles.areaView}>
        <ScrollView contentContainerStyle={styles.scrollViewConteudo}>
          <View style={styles.container}>
            <UltimosAgendamentos />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagemDeFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  areaView: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  scrollViewConteudo: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    width: "100%",
    justifyContent: "flex-start",
  },
});
