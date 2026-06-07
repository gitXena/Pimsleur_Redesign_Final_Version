import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AudioOnly from "../screens/AudioOnly";
import { Ionicons } from "@expo/vector-icons";

export default function AudioPlayerHeader({
  navigation,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent:
          "space-between",
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
          <Ionicons
            name="chevron-back"
            size={34}
            color="#FFF"
          />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* Replace with icons later */}

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AudioOnly")
          }
        >
          <Text
          style={{
            marginRight: "10px" ,
          }}
          ><Ionicons
          name="headset-outline"
          size={24}
          color="#fff"
        />
        </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
          style={{
            marginRight: "10px" ,
          }}
          >
            <Ionicons
          name="share-social"
          size={24}
          color="#fff"
        />
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}