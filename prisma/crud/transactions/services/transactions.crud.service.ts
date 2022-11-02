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
import { Prisma, transactions } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class transactionsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.transactionsFindManyArgs,
  ): Promise<Result<PaginationInterface<transactions>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.transactions.findMany(filter),
        this.prismaService.transactions.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get transactions Resources.`));
    }
  }

  async getById(id: string): Promise<Result<transactions, Error>> {
    try {
      const result = await this.prismaService.transactions.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`transactions Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.transactionsCreateInput): Promise<Result<transactions, Error>> {
    try {
      const result = await this.prismaService.transactions.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create transactions Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.transactionsUpdateInput,
  ): Promise<Result<transactions, Error>> {
    try {
      const result = await this.prismaService.transactions.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update transactions Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<transactions, Error>> {
    try {
      const result = await this.prismaService.transactions.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete transactions Resource ${id}.`,
      ));
    }
  }
}
