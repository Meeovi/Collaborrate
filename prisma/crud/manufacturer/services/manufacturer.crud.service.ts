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
import { Prisma, manufacturer } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class manufacturerCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.manufacturerFindManyArgs,
  ): Promise<Result<PaginationInterface<manufacturer>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.manufacturer.findMany(filter),
        this.prismaService.manufacturer.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get manufacturer Resources.`));
    }
  }

  async getById(id: string): Promise<Result<manufacturer, Error>> {
    try {
      const result = await this.prismaService.manufacturer.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`manufacturer Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.manufacturerCreateInput): Promise<Result<manufacturer, Error>> {
    try {
      const result = await this.prismaService.manufacturer.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create manufacturer Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.manufacturerUpdateInput,
  ): Promise<Result<manufacturer, Error>> {
    try {
      const result = await this.prismaService.manufacturer.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update manufacturer Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<manufacturer, Error>> {
    try {
      const result = await this.prismaService.manufacturer.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete manufacturer Resource ${id}.`,
      ));
    }
  }
}
