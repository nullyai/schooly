import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AchievementService } from "./achievement.service";
import { AchievementControllerBase } from "./base/achievement.controller.base";

@swagger.ApiTags("achievements")
@common.Controller("achievements")
export class AchievementController extends AchievementControllerBase {
  constructor(
    protected readonly service: AchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
