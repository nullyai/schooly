import { Challenge as TChallenge } from "../api/challenge/Challenge";

export const CHALLENGE_TITLE_FIELD = "title";

export const ChallengeTitle = (record: TChallenge): string => {
  return record.title?.toString() || String(record.id);
};
