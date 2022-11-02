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
import { Prisma, cities } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class citiesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.citiesFindManyArgs,
  ): Promise<Result<PaginationInterface<cities>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.cities.findMany(filter),
        this.prismaService.cities.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get cities Resources.`));
    }
  }

  async getById(id: string): Promise<Result<cities, Error>> {
    try {
      const result = await this.prismaService.cities.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`cities Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.citiesCreateInput): Promise<Result<cities, Error>> {
    try {
      const result = await this.prismaService.cities.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create cities Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.citiesUpdateInput,
  ): Promise<Result<cities, Error>> {
    try {
      const result = await this.prismaService.cities.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update cities Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<cities, Error>> {
    try {
      const result = await this.prismaService.cities.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete cities Resource ${id}.`,
      ));
    }
  }
}
