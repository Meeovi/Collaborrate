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
import { Prisma, workspaces } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class workspacesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.workspacesFindManyArgs,
  ): Promise<Result<PaginationInterface<workspaces>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.workspaces.findMany(filter),
        this.prismaService.workspaces.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get workspaces Resources.`));
    }
  }

  async getById(id: string): Promise<Result<workspaces, Error>> {
    try {
      const result = await this.prismaService.workspaces.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`workspaces Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.workspacesCreateInput): Promise<Result<workspaces, Error>> {
    try {
      const result = await this.prismaService.workspaces.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create workspaces Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.workspacesUpdateInput,
  ): Promise<Result<workspaces, Error>> {
    try {
      const result = await this.prismaService.workspaces.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update workspaces Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<workspaces, Error>> {
    try {
      const result = await this.prismaService.workspaces.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete workspaces Resource ${id}.`,
      ));
    }
  }
}
