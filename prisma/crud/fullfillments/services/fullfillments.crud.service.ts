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
import { Prisma, fullfillments } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class fullfillmentsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.fullfillmentsFindManyArgs,
  ): Promise<Result<PaginationInterface<fullfillments>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.fullfillments.findMany(filter),
        this.prismaService.fullfillments.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get fullfillments Resources.`));
    }
  }

  async getById(id: string): Promise<Result<fullfillments, Error>> {
    try {
      const result = await this.prismaService.fullfillments.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`fullfillments Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.fullfillmentsCreateInput): Promise<Result<fullfillments, Error>> {
    try {
      const result = await this.prismaService.fullfillments.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create fullfillments Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.fullfillmentsUpdateInput,
  ): Promise<Result<fullfillments, Error>> {
    try {
      const result = await this.prismaService.fullfillments.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update fullfillments Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<fullfillments, Error>> {
    try {
      const result = await this.prismaService.fullfillments.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete fullfillments Resource ${id}.`,
      ));
    }
  }
}
