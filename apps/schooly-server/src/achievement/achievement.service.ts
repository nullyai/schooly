import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AchievementServiceBase } from "./base/achievement.service.base";

@Injectable()
export class AchievementService extends AchievementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
