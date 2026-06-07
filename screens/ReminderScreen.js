// ReminderScreen.js
import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ProfileContext } from "../contexts/ProfileContext";
import styles from "../styles/ReminderStyles";

export default function ReminderScreen({ navigation }) {
  const { reminderSettings, setReminderSettings } = useContext(ProfileContext);

  const [selectedDays, setSelectedDays] = useState(reminderSettings.days);
  const [selectedHour, setSelectedHour] = useState(reminderSettings.hour);
  const [selectedPeriod, setSelectedPeriod] = useState(reminderSettings.period);

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Set Reminders</Text>
        <View style={{ width: 50 }} />
      </View>

      {/* SUBTITLE */}
      <Text style={styles.subtitle}>
        For best results, Dr. Pimsleur recommends{"\n"}doing one new audio lesson every day.
      </Text>

      {/* QUICK SETTINGS CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick settings</Text>
        <View style={styles.quickRow}>
          <TouchableOpacity style={styles.quickButton} onPress={() => setSelectedDays(days)}>
            <Text style={styles.quickText}>Every Day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => setSelectedDays(["MON", "TUE", "WED", "THU", "FRI"])}
          >
            <Text style={styles.quickText}>Weekdays</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => setSelectedDays(["SAT", "SUN"])}
          >
            <Text style={styles.quickText}>Weekends</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* DAYS CARD */}
      <View style={styles.card}>
        <View style={styles.daysContainer}>
          {days.map((day) => (
            <View key={day} style={styles.dayColumn}>
              <Text style={styles.dayLabel}>{day}</Text>
              <TouchableOpacity
                style={[
                  styles.dayButton,
                  selectedDays.includes(day) && styles.selectedDayButton,
                ]}
                onPress={() => toggleDay(day)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDays.includes(day) && styles.selectedDayText,
                  ]}
                >
                  {day.charAt(0)}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* TIME CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What time?</Text>
        <View style={styles.timeContainer}>
          {/* HOURS */}
          <ScrollView style={styles.timeScroll} showsVerticalScrollIndicator={false}>
            {hours.map((hour) => (
              <TouchableOpacity
                key={hour}
                style={[styles.timeItem, selectedHour === hour && styles.selectedTimeItem]}
                onPress={() => setSelectedHour(hour)}
              >
                <Text style={[styles.timeText, selectedHour === hour && styles.selectedTimeText]}>
                  {hour}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* AM / PM */}
          <ScrollView style={styles.timeScroll} showsVerticalScrollIndicator={false}>
            {["AM", "PM"].map((period) => (
              <TouchableOpacity
                key={period}
                style={[styles.timeItem, selectedPeriod === period && styles.selectedTimeItem]}
                onPress={() => setSelectedPeriod(period)}
              >
                <Text
                  style={[styles.timeText, selectedPeriod === period && styles.selectedTimeText]}
                >
                  {period}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* DONE */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          setReminderSettings({ hour: selectedHour, period: selectedPeriod, days: selectedDays });
          navigation.goBack();
        }}
      >
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}