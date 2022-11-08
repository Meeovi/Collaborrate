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
import { Prisma, discounts } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class discountsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.discountsFindManyArgs,
  ): Promise<Result<PaginationInterface<discounts>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.discounts.findMany(filter),
        this.prismaService.discounts.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get discounts Resources.`));
    }
  }

  async getById(id: string): Promise<Result<discounts, Error>> {
    try {
      const result = await this.prismaService.discounts.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`discounts Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.discountsCreateInput): Promise<Result<discounts, Error>> {
    try {
      const result = await this.prismaService.discounts.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create discounts Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.discountsUpdateInput,
  ): Promise<Result<discounts, Error>> {
    try {
      const result = await this.prismaService.discounts.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update discounts Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<discounts, Error>> {
    try {
      const result = await this.prismaService.discounts.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete discounts Resource ${id}.`,
      ));
    }
  }
}
