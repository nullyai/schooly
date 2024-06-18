import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AchievementModuleBase } from "./base/achievement.module.base";
import { AchievementService } from "./achievement.service";
import { AchievementController } from "./achievement.controller";
import { AchievementResolver } from "./achievement.resolver";

@Module({
  imports: [AchievementModuleBase, forwardRef(() => AuthModule)],
  controllers: [AchievementController],
  providers: [AchievementService, AchievementResolver],
  exports: [AchievementService],
})
export class AchievementModule {}
