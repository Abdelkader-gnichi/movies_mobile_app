import { Image, TextInput, View } from "react-native";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

export default function SearchBar({ onPress, placeholder }: Props) {
  return (
    <View className="flex-row items-center bg-dark-200">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={""}
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
}
