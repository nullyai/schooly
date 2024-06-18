import { AchievementWhereInput } from "./AchievementWhereInput";
import { AchievementOrderByInput } from "./AchievementOrderByInput";

export type AchievementFindManyArgs = {
  where?: AchievementWhereInput;
  orderBy?: Array<AchievementOrderByInput>;
  skip?: number;
  take?: number;
};
