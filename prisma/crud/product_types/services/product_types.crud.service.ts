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
import { Prisma, product_types } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class product_typesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.product_typesFindManyArgs,
  ): Promise<Result<PaginationInterface<product_types>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.product_types.findMany(filter),
        this.prismaService.product_types.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get product_types Resources.`));
    }
  }

  async getById(id: string): Promise<Result<product_types, Error>> {
    try {
      const result = await this.prismaService.product_types.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`product_types Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.product_typesCreateInput): Promise<Result<product_types, Error>> {
    try {
      const result = await this.prismaService.product_types.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create product_types Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.product_typesUpdateInput,
  ): Promise<Result<product_types, Error>> {
    try {
      const result = await this.prismaService.product_types.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update product_types Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<product_types, Error>> {
    try {
      const result = await this.prismaService.product_types.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete product_types Resource ${id}.`,
      ));
    }
  }
}
