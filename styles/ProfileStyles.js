
// ProfileStyles.js
import { StyleSheet } from "react-native";

const BLUE = "#1745FA";
const DARK_BG = "#0D1B5E";
const CARD_SHADOW = {
  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 4,
};

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 55,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  // ─── MENU ───────────────────────────────────────────
  menuButton: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },

  menuText: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  // ─── HEADER ─────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  editAvatarBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#35C2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  userInfo: {
    marginLeft: 15,
    flex: 1,
  },

  username: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 4,
  },

  loginInfo: {
    color: "#D9E4FF",
    fontSize: 12,
    marginBottom: 2,
  },

  usernameEditButton: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    marginBottom: 20,
  },

  editText: {
    color: BLUE,
    fontWeight: "600",
    fontSize: 13,
  },

  // ─── ROWS ────────────────────────────────────────────
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  // ─── LESSON CARD ────────────────────────────────────
  lessonCard: {
    width: "42%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    alignItems: "center",
    ...CARD_SHADOW,
  },

  cardLabel: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
    alignSelf: "flex-start",
  },

  lessonThumb: {
    width: "100%",
    height: 70,
    backgroundColor: "#E8EEFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  playIcon: {
    fontSize: 24,
    color: BLUE,
  },

  // ─── PROGRESS CARD ──────────────────────────────────
  progressCard: {
    width: "55%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    ...CARD_SHADOW,
  },

  progressCircleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  progressCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 5,
    borderColor: BLUE,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  progressPercent: {
    fontSize: 13,
    fontWeight: "700",
    color: BLUE,
  },

  progressMeta: {
    flex: 1,
  },

  progressCount: {
    fontSize: 22,
    fontWeight: "700",
    color: "#35C2FF",
  },

  progressSub: {
    fontSize: 11,
    color: "#888",
    lineHeight: 15,
  },

  // ─── SHARED CARD TITLE ──────────────────────────────
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: BLUE,
  },

  cardTitleDark: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  cardArrow: {
    position: "absolute",
    right: 12,
    top: "50%",
    fontSize: 22,
    color: BLUE,
  },

  // ─── CHALLENGES ─────────────────────────────────────
  challengesCard: {
    backgroundColor: DARK_BG,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    ...CARD_SHADOW,
  },

  challengeIcon: {
    fontSize: 24,
    marginRight: 12,
  },

  // ─── STREAK CARD ────────────────────────────────────
  streakCard: {
    backgroundColor: DARK_BG,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    ...CARD_SHADOW,
  },

  streakRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  streakBlock: {
    alignItems: "center",
    flex: 1,
  },

  streakLabel: {
    fontSize: 10,
    color: "#A0B0D8",
    marginBottom: 4,
    textAlign: "center",
  },

  streakNum: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  streakDay: {
    fontSize: 12,
    fontWeight: "400",
    color: "#A0B0D8",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dayCol: {
    alignItems: "center",
    flex: 1,
  },

  dayLabel: {
    fontSize: 9,
    color: "#A0B0D8",
    marginBottom: 6,
  },

  dayDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    opacity: 0.25,
  },

  // ─── REMINDERS ──────────────────────────────────────
  reminderButton: {
    backgroundColor: "#35C2FF",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  reminderIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  reminderText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },

  reminderArrow: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  // ─── HALF CARDS (Certificates / Voice Coach) ────────
  halfCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    minHeight: 130,
    alignItems: "center",
    ...CARD_SHADOW,
  },

  badgePreview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },

  badgePreviewIcon: {
    fontSize: 40,
  },

  voiceScore: {
    fontSize: 34,
    fontWeight: "700",
    color: BLUE,
    marginTop: 6,
  },

  starsRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  starIcon: {
    fontSize: 18,
    color: "#CCC",
    marginRight: 2,
  },

  voiceSubLabel: {
    fontSize: 10,
    color: "#888",
    marginTop: 2,
  },

  // ─── LOCKED CARDS (Vocabulary / Bonus Tracks) ───────
  lockedCard: {
    opacity: 0.85,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 110,
  },

  lockedIconWrap: {
    position: "relative",
    marginBottom: 10,
  },

  lockedBookIcon: {
    fontSize: 36,
  },

  lockBadge: {
    position: "absolute",
    bottom: -4,
    right: -6,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },

  lockIcon: {
    fontSize: 14,
  },

  // ─── VOICE COACH PRACTICE ───────────────────────────
  voicePracticeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    ...CARD_SHADOW,
  },

  voicePracticeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  micIcon: {
    fontSize: 28,
    marginRight: 10,
    backgroundColor: "#FFA500",
    borderRadius: 8,
    padding: 4,
    overflow: "hidden",
  },

  voicePracticeNum: {
    fontSize: 30,
    fontWeight: "700",
    color: BLUE,
  },

  voicePracticeLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },

  // ─── LEGACY CARD STYLES (kept for compatibility) ────
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    ...CARD_SHADOW,
  },

  largeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    height: 140,
    marginBottom: 18,
    ...CARD_SHADOW,
  },

  progressText: {
    marginTop: 10,
    fontSize: 13,
    color: BLUE,
  },

  streakText: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "700",
    color: BLUE,
  },

  // ─── MODALS ─────────────────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
  },

  modalTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: BLUE,
    marginBottom: 20,
  },

  avatarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  modalAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    color: BLUE,
  },

  confirmButton: {
    backgroundColor: BLUE,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  confirmButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  cancelText: {
    textAlign: "center",
    color: "#E53935",
    marginTop: 15,
    fontWeight: "600",
  },
});
