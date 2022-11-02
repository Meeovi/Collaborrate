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
import { Prisma, returns } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class returnsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.returnsFindManyArgs,
  ): Promise<Result<PaginationInterface<returns>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.returns.findMany(filter),
        this.prismaService.returns.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get returns Resources.`));
    }
  }

  async getById(id: string): Promise<Result<returns, Error>> {
    try {
      const result = await this.prismaService.returns.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`returns Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.returnsCreateInput): Promise<Result<returns, Error>> {
    try {
      const result = await this.prismaService.returns.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create returns Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.returnsUpdateInput,
  ): Promise<Result<returns, Error>> {
    try {
      const result = await this.prismaService.returns.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update returns Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<returns, Error>> {
    try {
      const result = await this.prismaService.returns.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete returns Resource ${id}.`,
      ));
    }
  }
}
