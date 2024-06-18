import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InteractionServiceBase } from "./base/interaction.service.base";

@Injectable()
export class InteractionService extends InteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
