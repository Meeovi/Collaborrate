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
import { Prisma, categories } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class categoriesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.categoriesFindManyArgs,
  ): Promise<Result<PaginationInterface<categories>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.categories.findMany(filter),
        this.prismaService.categories.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get categories Resources.`));
    }
  }

  async getById(id: string): Promise<Result<categories, Error>> {
    try {
      const result = await this.prismaService.categories.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`categories Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.categoriesCreateInput): Promise<Result<categories, Error>> {
    try {
      const result = await this.prismaService.categories.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create categories Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.categoriesUpdateInput,
  ): Promise<Result<categories, Error>> {
    try {
      const result = await this.prismaService.categories.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update categories Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<categories, Error>> {
    try {
      const result = await this.prismaService.categories.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete categories Resource ${id}.`,
      ));
    }
  }
}
