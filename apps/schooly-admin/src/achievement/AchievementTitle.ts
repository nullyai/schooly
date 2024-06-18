import { Achievement as TAchievement } from "../api/achievement/Achievement";

export const ACHIEVEMENT_TITLE_FIELD = "title";

export const AchievementTitle = (record: TAchievement): string => {
  return record.title?.toString() || String(record.id);
};
