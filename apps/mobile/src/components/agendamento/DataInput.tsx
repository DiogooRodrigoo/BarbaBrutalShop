import { View } from "react-native";
import DiaInput from "./DiaInput";
import HorariosInput from "./HorariosInput";

export interface DataInputProps {
  data: Date;
  quantidadeDeSlots: number;
  dataMudou: (data: Date) => void;
}

export default function DataInput(props: DataInputProps) {
  const { data, dataMudou, quantidadeDeSlots } = props;

  return (
    <View>
      <DiaInput data={data} dataMudou={dataMudou} />
      <HorariosInput
        data={data}
        quantidadeHorarios={quantidadeDeSlots}
        dataMudou={dataMudou}
      />
    </View>
  );
}
