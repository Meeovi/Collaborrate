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
import { Prisma, stocks } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class stocksCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.stocksFindManyArgs,
  ): Promise<Result<PaginationInterface<stocks>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.stocks.findMany(filter),
        this.prismaService.stocks.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get stocks Resources.`));
    }
  }

  async getById(id: string): Promise<Result<stocks, Error>> {
    try {
      const result = await this.prismaService.stocks.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`stocks Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.stocksCreateInput): Promise<Result<stocks, Error>> {
    try {
      const result = await this.prismaService.stocks.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create stocks Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.stocksUpdateInput,
  ): Promise<Result<stocks, Error>> {
    try {
      const result = await this.prismaService.stocks.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update stocks Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<stocks, Error>> {
    try {
      const result = await this.prismaService.stocks.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete stocks Resource ${id}.`,
      ));
    }
  }
}
