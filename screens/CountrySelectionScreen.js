import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import styles from "../styles/CountrySelectionScreenStyles";

const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Ireland",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "United Kingdom",
  "United States",
];

export default function CountrySelectionScreen({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const renderCountry = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.countryRow,
        selectedCountry === item && styles.selectedCountryRow,
      ]}
      onPress={() => setSelectedCountry(item)}
    >
      <Text
        style={[
          styles.countryText,
          selectedCountry === item && styles.selectedCountryText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const handleNext = () => {
    if (selectedCountry) {
      navigation.navigate("CreateAccount");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>I am from...</Text>
      <Text style={styles.subtitle}>
        (Country or region of residence)
      </Text>

      <View style={styles.listContainer}>
        <FlatList
          data={countries}
          keyExtractor={(item) => item}
          renderItem={renderCountry}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.nextButton,
          !selectedCountry && styles.disabledButton,
        ]}
        disabled={!selectedCountry}
        onPress={handleNext}
      >
        <Text
          style={[
            styles.nextButtonText,
            !selectedCountry && styles.disabledButtonText,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}