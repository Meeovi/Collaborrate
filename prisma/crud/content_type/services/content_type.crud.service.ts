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
import { Prisma, content_type } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class content_typeCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.content_typeFindManyArgs,
  ): Promise<Result<PaginationInterface<content_type>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.content_type.findMany(filter),
        this.prismaService.content_type.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get content_type Resources.`));
    }
  }

  async getById(id: string): Promise<Result<content_type, Error>> {
    try {
      const result = await this.prismaService.content_type.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`content_type Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.content_typeCreateInput): Promise<Result<content_type, Error>> {
    try {
      const result = await this.prismaService.content_type.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create content_type Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.content_typeUpdateInput,
  ): Promise<Result<content_type, Error>> {
    try {
      const result = await this.prismaService.content_type.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update content_type Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<content_type, Error>> {
    try {
      const result = await this.prismaService.content_type.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete content_type Resource ${id}.`,
      ));
    }
  }
}
