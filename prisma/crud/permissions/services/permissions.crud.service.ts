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
import { Prisma, permissions } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class permissionsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.permissionsFindManyArgs,
  ): Promise<Result<PaginationInterface<permissions>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.permissions.findMany(filter),
        this.prismaService.permissions.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get permissions Resources.`));
    }
  }

  async getById(id: string): Promise<Result<permissions, Error>> {
    try {
      const result = await this.prismaService.permissions.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`permissions Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.permissionsCreateInput): Promise<Result<permissions, Error>> {
    try {
      const result = await this.prismaService.permissions.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create permissions Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.permissionsUpdateInput,
  ): Promise<Result<permissions, Error>> {
    try {
      const result = await this.prismaService.permissions.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update permissions Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<permissions, Error>> {
    try {
      const result = await this.prismaService.permissions.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete permissions Resource ${id}.`,
      ));
    }
  }
}
