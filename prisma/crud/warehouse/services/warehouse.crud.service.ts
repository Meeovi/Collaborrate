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
import { Prisma, warehouse } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class warehouseCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.warehouseFindManyArgs,
  ): Promise<Result<PaginationInterface<warehouse>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.warehouse.findMany(filter),
        this.prismaService.warehouse.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get warehouse Resources.`));
    }
  }

  async getById(id: string): Promise<Result<warehouse, Error>> {
    try {
      const result = await this.prismaService.warehouse.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`warehouse Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.warehouseCreateInput): Promise<Result<warehouse, Error>> {
    try {
      const result = await this.prismaService.warehouse.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create warehouse Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.warehouseUpdateInput,
  ): Promise<Result<warehouse, Error>> {
    try {
      const result = await this.prismaService.warehouse.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update warehouse Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<warehouse, Error>> {
    try {
      const result = await this.prismaService.warehouse.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete warehouse Resource ${id}.`,
      ));
    }
  }
}
