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
import { Prisma, customers } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class customersCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.customersFindManyArgs,
  ): Promise<Result<PaginationInterface<customers>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.customers.findMany(filter),
        this.prismaService.customers.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get customers Resources.`));
    }
  }

  async getById(id: string): Promise<Result<customers, Error>> {
    try {
      const result = await this.prismaService.customers.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`customers Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.customersCreateInput): Promise<Result<customers, Error>> {
    try {
      const result = await this.prismaService.customers.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create customers Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.customersUpdateInput,
  ): Promise<Result<customers, Error>> {
    try {
      const result = await this.prismaService.customers.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update customers Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<customers, Error>> {
    try {
      const result = await this.prismaService.customers.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete customers Resource ${id}.`,
      ));
    }
  }
}
