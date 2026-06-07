// ReminderStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8ED",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  backText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "400",
  },

  headerTitle: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "600",
  },

  subtitle: {
    color: "#444",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 18,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 14,
  },

  // kept for compatibility but not used directly
  sectionTitle: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },

  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  quickButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    paddingVertical: 10,
    alignItems: "center",
  },

  quickText: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 13,
  },

  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dayColumn: {
    alignItems: "center",
    gap: 6,
  },

  dayLabel: {
    fontSize: 10,
    color: "#333",
    fontWeight: "500",
    textTransform: "uppercase",
  },

  dayButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedDayButton: {
    backgroundColor: "#19B0F9",
    borderColor: "#19B0F9",
  },

  dayText: {
    color: "#333",
    fontSize: 11,
    fontWeight: "500",
  },

  selectedDayText: {
    color: "#FFFFFF",
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 4,
  },

  timeScroll: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    borderRadius: 14,
    height: 160,
  },

  timeItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },

  selectedTimeItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 3,
  },

  timeText: {
    fontSize: 16,
    color: "#999",
    fontWeight: "400",
  },

  selectedTimeText: {
    color: "#000000",
    fontWeight: "600",
  },

  doneButton: {
    backgroundColor: "#3BBFFF",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
  },

  doneText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});