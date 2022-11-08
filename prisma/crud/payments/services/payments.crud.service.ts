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
import { Prisma, payments } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class paymentsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.paymentsFindManyArgs,
  ): Promise<Result<PaginationInterface<payments>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.payments.findMany(filter),
        this.prismaService.payments.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get payments Resources.`));
    }
  }

  async getById(id: string): Promise<Result<payments, Error>> {
    try {
      const result = await this.prismaService.payments.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`payments Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.paymentsCreateInput): Promise<Result<payments, Error>> {
    try {
      const result = await this.prismaService.payments.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create payments Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.paymentsUpdateInput,
  ): Promise<Result<payments, Error>> {
    try {
      const result = await this.prismaService.payments.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update payments Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<payments, Error>> {
    try {
      const result = await this.prismaService.payments.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete payments Resource ${id}.`,
      ));
    }
  }
}
