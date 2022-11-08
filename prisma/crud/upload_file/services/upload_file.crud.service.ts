/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, upload_file } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class upload_fileCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.upload_fileFindManyArgs,
  ): Promise<Result<PaginationInterface<upload_file>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.upload_file.findMany(filter),
        this.prismaService.upload_file.count({ where: filter?.where }),
      ]);

      const take = filter?.take ? filter?.take : count;
      const skip = filter?.skip ? filter?.skip : 0;

      return ok({
        items: items,
        meta: {
          totalItems: count,
          items: items.length,
          totalPages: Math.ceil(count / take),
          page: skip / take + 1,
        },
      });
    }
    catch(e) {
      return err(new InternalServerErrorException(`Could not get upload_file Resources.`));
    }
  }

  async getById(id: string): Promise<Result<upload_file, Error>> {
    try {
      const result = await this.prismaService.upload_file.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`upload_file Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.upload_fileCreateInput): Promise<Result<upload_file, Error>> {
    try {
      const result = await this.prismaService.upload_file.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create upload_file Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.upload_fileUpdateInput,
  ): Promise<Result<upload_file, Error>> {
    try {
      const result = await this.prismaService.upload_file.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update upload_file Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<upload_file, Error>> {
    try {
      const result = await this.prismaService.upload_file.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete upload_file Resource ${id}.`,
      ));
    }
  }
}
