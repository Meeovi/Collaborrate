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
import { Prisma, roles } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class rolesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.rolesFindManyArgs,
  ): Promise<Result<PaginationInterface<roles>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.roles.findMany(filter),
        this.prismaService.roles.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get roles Resources.`));
    }
  }

  async getById(id: string): Promise<Result<roles, Error>> {
    try {
      const result = await this.prismaService.roles.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`roles Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.rolesCreateInput): Promise<Result<roles, Error>> {
    try {
      const result = await this.prismaService.roles.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create roles Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.rolesUpdateInput,
  ): Promise<Result<roles, Error>> {
    try {
      const result = await this.prismaService.roles.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update roles Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<roles, Error>> {
    try {
      const result = await this.prismaService.roles.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete roles Resource ${id}.`,
      ));
    }
  }
}
