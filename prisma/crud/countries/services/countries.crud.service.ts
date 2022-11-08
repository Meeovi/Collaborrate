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
import { Prisma, countries } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class countriesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.countriesFindManyArgs,
  ): Promise<Result<PaginationInterface<countries>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.countries.findMany(filter),
        this.prismaService.countries.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get countries Resources.`));
    }
  }

  async getById(id: string): Promise<Result<countries, Error>> {
    try {
      const result = await this.prismaService.countries.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`countries Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.countriesCreateInput): Promise<Result<countries, Error>> {
    try {
      const result = await this.prismaService.countries.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create countries Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.countriesUpdateInput,
  ): Promise<Result<countries, Error>> {
    try {
      const result = await this.prismaService.countries.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update countries Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<countries, Error>> {
    try {
      const result = await this.prismaService.countries.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete countries Resource ${id}.`,
      ));
    }
  }
}
