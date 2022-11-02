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
import { Prisma, products } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class productsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.productsFindManyArgs,
  ): Promise<Result<PaginationInterface<products>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.products.findMany(filter),
        this.prismaService.products.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get products Resources.`));
    }
  }

  async getById(id: string): Promise<Result<products, Error>> {
    try {
      const result = await this.prismaService.products.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`products Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.productsCreateInput): Promise<Result<products, Error>> {
    try {
      const result = await this.prismaService.products.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create products Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.productsUpdateInput,
  ): Promise<Result<products, Error>> {
    try {
      const result = await this.prismaService.products.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update products Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<products, Error>> {
    try {
      const result = await this.prismaService.products.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete products Resource ${id}.`,
      ));
    }
  }
}
