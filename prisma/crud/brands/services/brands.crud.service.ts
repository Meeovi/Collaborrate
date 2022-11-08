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
import { Prisma, brands } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class brandsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.brandsFindManyArgs,
  ): Promise<Result<PaginationInterface<brands>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.brands.findMany(filter),
        this.prismaService.brands.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get brands Resources.`));
    }
  }

  async getById(id: string): Promise<Result<brands, Error>> {
    try {
      const result = await this.prismaService.brands.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`brands Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.brandsCreateInput): Promise<Result<brands, Error>> {
    try {
      const result = await this.prismaService.brands.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create brands Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.brandsUpdateInput,
  ): Promise<Result<brands, Error>> {
    try {
      const result = await this.prismaService.brands.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update brands Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<brands, Error>> {
    try {
      const result = await this.prismaService.brands.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete brands Resource ${id}.`,
      ));
    }
  }
}
