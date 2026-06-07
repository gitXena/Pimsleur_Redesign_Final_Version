
// BottomNavBar.js
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function BottomNavBar({ navigation }) {
  const route = useRoute();

  const tabs = [
    { label: "Learn",    screen: "Home"       },
    { label: "Practice", screen: "Practice"   },
    { label: "Speak",    screen: "VoiceCoach" },
    { label: "Enrich",   screen: "Enrich"     },
    { label: "Profile",  screen: "Profile"    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        marginBottom: "10%",
      }}
    >
      {tabs.map(({ label, screen }) => {
        const isActive = route.name === screen;

        return (
          <TouchableOpacity
            key={screen}
            onPress={() => navigation.navigate(screen)}
            style={
              isActive && {
                backgroundColor: "#FFF",
                borderRadius: 20,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }
            }
          >
            <Text
              style={{
                color: isActive ? "#1745FA" : "#FFF",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}