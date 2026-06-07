
//LessonScreenStyles.js
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.38)",
  },

  // ── Top video/player area ──────────────────────────────────────────────────
  topPage: {
    width: 400,
    height: 340,
    alignItems: "center",
    justifyContent: "center",
  },

  // Horizontal page-dot indicators (•  •)
  pageDotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  pageDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  pageDotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  // Chevron / swipe-up hint at the bottom of the top section
  swipeHintContainer: {
    alignItems: "center",
    paddingBottom: 4,
    paddingTop: 6,
    backgroundColor: "#eef0fb",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
  },
  swipeHintChevron: {
    color: "#7B8CDE",
    fontSize: 18,
  },

  // ── White lesson card ──────────────────────────────────────────────────────
  lessonCard: {
    backgroundColor: "#F5F6FB",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    paddingTop: 22,
    minHeight: 600,
    flex: 1,
  },

  // "Lesson 1" header row
  lessonHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  lessonTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#16173B",
    letterSpacing: -0.3,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF0FB",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    gap: 5,
    borderWidth: 1,
    borderColor: "#D0D4F0",
  },
  downloadButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5B6BD5",
  },

  // "Complete this lesson…" subtitle
  lessonSubtitle: {
    fontSize: 13,
    color: "#8A8FA8",
    paddingHorizontal: 20,
    marginTop: 2,
    marginBottom: 14,
  },

  // ── Skill icons row ───────────────────────────────────────────────────────
  skillsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  skillItem: {
    alignItems: "center",
    width: 72,
  },
  skillIconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#F0F1F8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
    borderWidth: 1.5,
    borderColor: "#E2E4F0",
  },
  skillLabel: {
    fontSize: 11,
    color: "#5A5F7E",
    textAlign: "center",
    lineHeight: 14,
    fontWeight: "500",
  },

  // "Practice the contents…" divider line
  practiceDivider: {
    borderTopWidth: 1,
    borderColor: "#E8EAF4",
    marginHorizontal: 20,
    marginTop: 14,
    marginBottom: 16,
  },
  practiceLabel: {
    fontSize: 12,
    color: "#9EA3BB",
    paddingHorizontal: 20,
    marginBottom: 14,
  },

  // ── Voice Coach card ──────────────────────────────────────────────────────
  voiceCoachCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#9BA3D4",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: { elevation: 4 },
    }),
  },
  voiceCoachHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 12,
  },
  voiceCoachIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EEF0FB",
    alignItems: "center",
    justifyContent: "center",
  },
  voiceCoachTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#16173B",
  },
  voiceCoachSubtitle: {
    fontSize: 12,
    color: "#8A8FA8",
    marginTop: 2,
    flex: 1,
    flexWrap: "wrap",
  },
  voiceCoachStatsRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 14,
  },
  statBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  statCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#C8CCE8",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  statCircleValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#16173B",
  },
  statLabel: {
    fontSize: 12,
    color: "#5A5F7E",
    fontWeight: "500",
    maxWidth: 80,
  },

cultureCard: {
  flex: 1,
  justifyContent: "space-between",   // title top, attribution bottom
  textAlign: "left",
  paddingHorizontal: 30,
  paddingTop: 16,
  paddingBottom: 24,
},
cultureTitle: {
  fontSize: 22,
  fontWeight: "600",
  color: "#ffffff",
  marginBottom: 16,
},
cultureContent: {
  fontSize: 19,
  fontWeight: "500",
  color: "#fff",
  lineHeight: 36,
  flex: 1,                            // fills remaining space between title & attribution
},


});