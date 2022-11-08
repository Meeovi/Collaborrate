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
import { Prisma, targets } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class targetsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.targetsFindManyArgs,
  ): Promise<Result<PaginationInterface<targets>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.targets.findMany(filter),
        this.prismaService.targets.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get targets Resources.`));
    }
  }

  async getById(id: string): Promise<Result<targets, Error>> {
    try {
      const result = await this.prismaService.targets.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`targets Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.targetsCreateInput): Promise<Result<targets, Error>> {
    try {
      const result = await this.prismaService.targets.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create targets Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.targetsUpdateInput,
  ): Promise<Result<targets, Error>> {
    try {
      const result = await this.prismaService.targets.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update targets Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<targets, Error>> {
    try {
      const result = await this.prismaService.targets.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete targets Resource ${id}.`,
      ));
    }
  }
}
