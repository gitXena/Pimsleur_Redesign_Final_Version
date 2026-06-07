import React from "react";
import {
  TouchableOpacity,
  Text
} from "react-native";

import styles from "../styles/LessonNumberStyles";

function LessonNumber({
  number,
  selected,
  onPress
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && styles.selected
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          selected && styles.selectedText
        ]}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );
}

export default LessonNumber;