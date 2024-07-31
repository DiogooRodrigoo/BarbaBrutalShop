import imagens from "@/src/data/constants/imagens";
import { Profissional } from "@barba/core";
import { useProfissionais } from "@barba/ui";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

interface ProfissionalInputProp {
  profissional: Profissional | null;
  profissionalMudou: (profissional: Profissional) => void;
}

export default function ProfissionalInput(props: ProfissionalInputProp) {
  const { profissional, profissionalMudou } = props;
  const { profissionais } = useProfissionais();

  function renderizarProfissional(p: Profissional) {
    return (
      <View
        key={p?.id}
        style={{
          ...styles.profissionalContainer,
          backgroundColor: profissional?.id === p?.id ? "#22c55e" : "#18181b",
        }}
      >
        <Pressable onPress={() => profissionalMudou(p)}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={
                imagens.profissionais.find((pr) => pr.id === p.id)?.imagem
              }
            />
            <Text style={{ color: "white", paddingVertical: 5 }}>
              {p.nome.split(" ")[0]}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  }

  return <View>{profissionais.map((p) => renderizarProfissional(p))}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  profissionalContainer: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
    padding: 2,
  },
});
