/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Student as PrismaStudent,
  Achievement as PrismaAchievement,
  Teacher as PrismaTeacher,
} from "@prisma/client";

import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class StudentServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(args: Omit<Prisma.StudentCountArgs, "select">): Promise<number> {
    return this.prisma.student.count(args);
  }

  async students(args: Prisma.StudentFindManyArgs): Promise<PrismaStudent[]> {
    return this.prisma.student.findMany(args);
  }
  async student(
    args: Prisma.StudentFindUniqueArgs
  ): Promise<PrismaStudent | null> {
    return this.prisma.student.findUnique(args);
  }
  async createStudent(args: Prisma.StudentCreateArgs): Promise<PrismaStudent> {
    return this.prisma.student.create(args);
  }
  async updateStudent(args: Prisma.StudentUpdateArgs): Promise<PrismaStudent> {
    return this.prisma.student.update(args);
  }
  async deleteStudent(args: Prisma.StudentDeleteArgs): Promise<PrismaStudent> {
    return this.prisma.student.delete(args);
  }

  async uploadProfilePicture<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaStudent> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "profilePicture";
    const profilePicture = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.student.update({
      where: args.where,

      data: {
        profilePicture: profilePicture as InputJsonValue,
      },
    });
  }

  async downloadProfilePicture<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>
  ): Promise<FileDownload> {
    const { profilePicture } = await this.prisma.student.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      profilePicture as unknown as LocalStorageFile
    );
  }

  async deleteProfilePicture<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>
  ): Promise<PrismaStudent> {
    const { profilePicture } = await this.prisma.student.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      profilePicture as unknown as LocalStorageFile
    );

    return await this.prisma.student.update({
      where: args.where,

      data: {
        profilePicture: Prisma.DbNull,
      },
    });
  }

  async findAchievements(
    parentId: string,
    args: Prisma.AchievementFindManyArgs
  ): Promise<PrismaAchievement[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .achievements(args);
  }

  async getTeacher(parentId: string): Promise<PrismaTeacher | null> {
    return this.prisma.student
      .findUnique({
        where: { id: parentId },
      })
      .teacher();
  }
}
