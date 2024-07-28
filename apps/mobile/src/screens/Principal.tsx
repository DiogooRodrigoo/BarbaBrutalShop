import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";

import Agendamento from "./Agendamento";
import Usuario from "./Usuario";
import Icone from "../components/shared/Icone";
import Inicio from "./Inicio";

const Tab = createBottomTabNavigator();

export default function Principal({ navigation }: any) {
  function tabScreen(
    nome: string,
    componente: any,
    label: string,
    icone: string
  ) {
    return (
      <Tab.Screen
        name={nome}
        component={componente}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabScreen}>
              <Icone
                nome={icone as any}
                tamanho={24}
                color={focused ? "#29a7ea" : "#9da2ae"}
              />
              <Text
                style={{
                  ...styles.tabScreenText,
                  color: focused ? "#29a7ea" : "#9da2ae",
                }}
              >
                {label}
              </Text>
            </View>
          ),
        }}
      />
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#222",
        tabBarInactiveBackgroundColor: "#222",
        tabBarStyle: {
          backgroundColor: "#222",
        },
      }}
    >
      {tabScreen("Inicio", Inicio, "Inicio", "home-outline")}
      {tabScreen("Agendamento", Agendamento, "Agendamento", "calendar-outline")}
      {tabScreen("Usuario", Usuario, "Usuario", "person-outline")}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tabScreenText: {
    fontSize: 10,
  },
});
