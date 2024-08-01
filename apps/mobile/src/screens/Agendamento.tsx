import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import useAgendamento from "../data/hooks/useAgendamento";
import Passos from "../components/agendamento/Passos";
import { Profissional, Servico } from "@barba/core";
import ProfissionalInput from "../components/agendamento/ProfissionalInput";
import ServicoInput from "../components/agendamento/ServicoInput";
import DataInput from "../components/agendamento/DataInput";

export default function Agendamento({ navigation }: any) {
  const [permiteProximoPasso, setPermiteProximoPasso] =
    useState<boolean>(false);
  const {
    profissional,
    servicos,
    data,
    selecionarData,
    selecionarProfissional,
    selecionarServicos,
    quantidadeDeSlots,
  } = useAgendamento();

  function profissionalMudou(profissional: Profissional) {
    selecionarProfissional(profissional);
    setPermiteProximoPasso(!!profissional);
  }

  function servicosMudou(servicos: Servico[]) {
    selecionarServicos(servicos);
    setPermiteProximoPasso(servicos.length > 0);
  }

  function dataMudou(data: Date) {
    selecionarData(data);

    const temData = data;
    const horaValida = data.getHours() >= 0 && data.getHours() <= 21;
    setPermiteProximoPasso(temData && horaValida);
  }

  return (
    <SafeAreaView style={{ ...styles.areaView }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Agende seu horário</Text>
          <Passos
            labels={["Profissional", "Serviços", "Horário"]}
            permiteProximoPasso={permiteProximoPasso}
            permiteProximoPassoMudou={setPermiteProximoPasso}
            finalizar={() => navigation.navigate("Sumario")}
          >
            <ProfissionalInput
              profissional={profissional}
              profissionalMudou={profissionalMudou}
            />
            <ServicoInput servicos={servicos} servicoMudou={servicosMudou} />
            <DataInput
              data={data}
              dataMudou={dataMudou}
              quantidadeDeSlots={quantidadeDeSlots()}
            />
          </Passos>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    display: "flex",
    flex: 1,
    gap: 12,
    width: "100%",
    backgroundColor: "black",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    marginBottom: 20,
  },
  titulo: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
});
