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
import { Prisma, orders } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class ordersCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.ordersFindManyArgs,
  ): Promise<Result<PaginationInterface<orders>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.orders.findMany(filter),
        this.prismaService.orders.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get orders Resources.`));
    }
  }

  async getById(id: string): Promise<Result<orders, Error>> {
    try {
      const result = await this.prismaService.orders.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`orders Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.ordersCreateInput): Promise<Result<orders, Error>> {
    try {
      const result = await this.prismaService.orders.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create orders Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.ordersUpdateInput,
  ): Promise<Result<orders, Error>> {
    try {
      const result = await this.prismaService.orders.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update orders Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<orders, Error>> {
    try {
      const result = await this.prismaService.orders.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete orders Resource ${id}.`,
      ));
    }
  }
}
