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
import { Prisma, taxes } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class taxesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.taxesFindManyArgs,
  ): Promise<Result<PaginationInterface<taxes>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.taxes.findMany(filter),
        this.prismaService.taxes.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get taxes Resources.`));
    }
  }

  async getById(id: string): Promise<Result<taxes, Error>> {
    try {
      const result = await this.prismaService.taxes.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`taxes Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.taxesCreateInput): Promise<Result<taxes, Error>> {
    try {
      const result = await this.prismaService.taxes.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create taxes Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.taxesUpdateInput,
  ): Promise<Result<taxes, Error>> {
    try {
      const result = await this.prismaService.taxes.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update taxes Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<taxes, Error>> {
    try {
      const result = await this.prismaService.taxes.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete taxes Resource ${id}.`,
      ));
    }
  }
}
