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
import { Prisma, currencies } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class currenciesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.currenciesFindManyArgs,
  ): Promise<Result<PaginationInterface<currencies>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.currencies.findMany(filter),
        this.prismaService.currencies.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get currencies Resources.`));
    }
  }

  async getById(id: string): Promise<Result<currencies, Error>> {
    try {
      const result = await this.prismaService.currencies.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`currencies Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.currenciesCreateInput): Promise<Result<currencies, Error>> {
    try {
      const result = await this.prismaService.currencies.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create currencies Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.currenciesUpdateInput,
  ): Promise<Result<currencies, Error>> {
    try {
      const result = await this.prismaService.currencies.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update currencies Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<currencies, Error>> {
    try {
      const result = await this.prismaService.currencies.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete currencies Resource ${id}.`,
      ));
    }
  }
}
