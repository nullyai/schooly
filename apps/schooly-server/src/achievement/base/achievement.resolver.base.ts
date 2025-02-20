/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Achievement } from "./Achievement";
import { AchievementCountArgs } from "./AchievementCountArgs";
import { AchievementFindManyArgs } from "./AchievementFindManyArgs";
import { AchievementFindUniqueArgs } from "./AchievementFindUniqueArgs";
import { CreateAchievementArgs } from "./CreateAchievementArgs";
import { UpdateAchievementArgs } from "./UpdateAchievementArgs";
import { DeleteAchievementArgs } from "./DeleteAchievementArgs";
import { Student } from "../../student/base/Student";
import { AchievementService } from "../achievement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Achievement)
export class AchievementResolverBase {
  constructor(
    protected readonly service: AchievementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "any",
  })
  async _achievementsMeta(
    @graphql.Args() args: AchievementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Achievement])
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "any",
  })
  async achievements(
    @graphql.Args() args: AchievementFindManyArgs
  ): Promise<Achievement[]> {
    return this.service.achievements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Achievement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "own",
  })
  async achievement(
    @graphql.Args() args: AchievementFindUniqueArgs
  ): Promise<Achievement | null> {
    const result = await this.service.achievement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Achievement)
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "create",
    possession: "any",
  })
  async createAchievement(
    @graphql.Args() args: CreateAchievementArgs
  ): Promise<Achievement> {
    return await this.service.createAchievement({
      ...args,
      data: {
        ...args.data,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Achievement)
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "update",
    possession: "any",
  })
  async updateAchievement(
    @graphql.Args() args: UpdateAchievementArgs
  ): Promise<Achievement | null> {
    try {
      return await this.service.updateAchievement({
        ...args,
        data: {
          ...args.data,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Achievement)
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "delete",
    possession: "any",
  })
  async deleteAchievement(
    @graphql.Args() args: DeleteAchievementArgs
  ): Promise<Achievement | null> {
    try {
      return await this.service.deleteAchievement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Student, {
    nullable: true,
    name: "student",
  })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async getStudent(
    @graphql.Parent() parent: Achievement
  ): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
