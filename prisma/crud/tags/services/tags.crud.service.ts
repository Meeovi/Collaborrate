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
import { Prisma, tags } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class tagsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.tagsFindManyArgs,
  ): Promise<Result<PaginationInterface<tags>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.tags.findMany(filter),
        this.prismaService.tags.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get tags Resources.`));
    }
  }

  async getById(id: string): Promise<Result<tags, Error>> {
    try {
      const result = await this.prismaService.tags.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`tags Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.tagsCreateInput): Promise<Result<tags, Error>> {
    try {
      const result = await this.prismaService.tags.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create tags Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.tagsUpdateInput,
  ): Promise<Result<tags, Error>> {
    try {
      const result = await this.prismaService.tags.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update tags Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<tags, Error>> {
    try {
      const result = await this.prismaService.tags.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete tags Resource ${id}.`,
      ));
    }
  }
}
