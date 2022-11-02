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
import { Prisma, quotes } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class quotesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.quotesFindManyArgs,
  ): Promise<Result<PaginationInterface<quotes>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.quotes.findMany(filter),
        this.prismaService.quotes.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get quotes Resources.`));
    }
  }

  async getById(id: string): Promise<Result<quotes, Error>> {
    try {
      const result = await this.prismaService.quotes.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`quotes Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.quotesCreateInput): Promise<Result<quotes, Error>> {
    try {
      const result = await this.prismaService.quotes.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create quotes Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.quotesUpdateInput,
  ): Promise<Result<quotes, Error>> {
    try {
      const result = await this.prismaService.quotes.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update quotes Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<quotes, Error>> {
    try {
      const result = await this.prismaService.quotes.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete quotes Resource ${id}.`,
      ));
    }
  }
}
