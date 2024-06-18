import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InteractionModuleBase } from "./base/interaction.module.base";
import { InteractionService } from "./interaction.service";
import { InteractionController } from "./interaction.controller";
import { InteractionResolver } from "./interaction.resolver";

@Module({
  imports: [InteractionModuleBase, forwardRef(() => AuthModule)],
  controllers: [InteractionController],
  providers: [InteractionService, InteractionResolver],
  exports: [InteractionService],
})
export class InteractionModule {}
