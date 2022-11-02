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
import { Prisma, ticketing } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class ticketingCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.ticketingFindManyArgs,
  ): Promise<Result<PaginationInterface<ticketing>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.ticketing.findMany(filter),
        this.prismaService.ticketing.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get ticketing Resources.`));
    }
  }

  async getById(id: string): Promise<Result<ticketing, Error>> {
    try {
      const result = await this.prismaService.ticketing.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`ticketing Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.ticketingCreateInput): Promise<Result<ticketing, Error>> {
    try {
      const result = await this.prismaService.ticketing.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create ticketing Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.ticketingUpdateInput,
  ): Promise<Result<ticketing, Error>> {
    try {
      const result = await this.prismaService.ticketing.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update ticketing Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<ticketing, Error>> {
    try {
      const result = await this.prismaService.ticketing.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete ticketing Resource ${id}.`,
      ));
    }
  }
}
