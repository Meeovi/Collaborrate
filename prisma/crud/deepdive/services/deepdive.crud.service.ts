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
import { Prisma, deepdive } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class deepdiveCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.deepdiveFindManyArgs,
  ): Promise<Result<PaginationInterface<deepdive>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.deepdive.findMany(filter),
        this.prismaService.deepdive.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get deepdive Resources.`));
    }
  }

  async getById(id: string): Promise<Result<deepdive, Error>> {
    try {
      const result = await this.prismaService.deepdive.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`deepdive Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.deepdiveCreateInput): Promise<Result<deepdive, Error>> {
    try {
      const result = await this.prismaService.deepdive.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create deepdive Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.deepdiveUpdateInput,
  ): Promise<Result<deepdive, Error>> {
    try {
      const result = await this.prismaService.deepdive.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update deepdive Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<deepdive, Error>> {
    try {
      const result = await this.prismaService.deepdive.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete deepdive Resource ${id}.`,
      ));
    }
  }
}
