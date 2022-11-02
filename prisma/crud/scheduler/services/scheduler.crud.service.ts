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
import { Prisma, scheduler } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class schedulerCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.schedulerFindManyArgs,
  ): Promise<Result<PaginationInterface<scheduler>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.scheduler.findMany(filter),
        this.prismaService.scheduler.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get scheduler Resources.`));
    }
  }

  async getById(id: string): Promise<Result<scheduler, Error>> {
    try {
      const result = await this.prismaService.scheduler.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`scheduler Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.schedulerCreateInput): Promise<Result<scheduler, Error>> {
    try {
      const result = await this.prismaService.scheduler.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create scheduler Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.schedulerUpdateInput,
  ): Promise<Result<scheduler, Error>> {
    try {
      const result = await this.prismaService.scheduler.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update scheduler Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<scheduler, Error>> {
    try {
      const result = await this.prismaService.scheduler.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete scheduler Resource ${id}.`,
      ));
    }
  }
}
