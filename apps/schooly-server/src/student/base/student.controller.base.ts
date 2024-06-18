/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { StudentService } from "../student.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StudentCreateInput } from "./StudentCreateInput";
import { Student } from "./Student";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentUpdateInput } from "./StudentUpdateInput";
import { AchievementFindManyArgs } from "../../achievement/base/AchievementFindManyArgs";
import { Achievement } from "../../achievement/base/Achievement";
import { AchievementWhereUniqueInput } from "../../achievement/base/AchievementWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StudentControllerBase {
  constructor(
    protected readonly service: StudentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Student })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createStudent(
    @common.Body() data: StudentCreateInput
  ): Promise<Student> {
    return await this.service.createStudent({
      data: {
        ...data,

        teacher: data.teacher
          ? {
              connect: data.teacher,
            }
          : undefined,
      },
      select: {
        bio: true,
        createdAt: true,
        email: true,
        firstName: true,
        friends: true,
        id: true,
        lastName: true,
        profilePicture: true,

        teacher: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Student] })
  @ApiNestedQuery(StudentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async students(@common.Req() request: Request): Promise<Student[]> {
    const args = plainToClass(StudentFindManyArgs, request.query);
    return this.service.students({
      ...args,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        firstName: true,
        friends: true,
        id: true,
        lastName: true,
        profilePicture: true,

        teacher: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async student(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    const result = await this.service.student({
      where: params,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        firstName: true,
        friends: true,
        id: true,
        lastName: true,
        profilePicture: true,

        teacher: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateStudent(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() data: StudentUpdateInput
  ): Promise<Student | null> {
    try {
      return await this.service.updateStudent({
        where: params,
        data: {
          ...data,

          teacher: data.teacher
            ? {
                connect: data.teacher,
              }
            : undefined,
        },
        select: {
          bio: true,
          createdAt: true,
          email: true,
          firstName: true,
          friends: true,
          id: true,
          lastName: true,
          profilePicture: true,

          teacher: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStudent(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    try {
      return await this.service.deleteStudent({
        where: params,
        select: {
          bio: true,
          createdAt: true,
          email: true,
          firstName: true,
          friends: true,
          id: true,
          lastName: true,
          profilePicture: true,

          teacher: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/profilePicture")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Student,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadProfilePicture(
    @common.Param()
    params: StudentWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Student> {
    return this.service.uploadProfilePicture(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/profilePicture")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadProfilePicture(
    @common.Param()
    params: StudentWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadProfilePicture({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/profilePicture")
  @swagger.ApiOkResponse({
    type: Student,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteProfilePicture(
    @common.Param()
    params: StudentWhereUniqueInput
  ): Promise<Student> {
    return this.service.deleteProfilePicture({
      where: params,
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/achievements")
  @ApiNestedQuery(AchievementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "any",
  })
  async findAchievements(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Achievement[]> {
    const query = plainToClass(AchievementFindManyArgs, request.query);
    const results = await this.service.findAchievements(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,

        student: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/achievements")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async connectAchievements(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        connect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/achievements")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateAchievements(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        set: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/achievements")
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async disconnectAchievements(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        disconnect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
