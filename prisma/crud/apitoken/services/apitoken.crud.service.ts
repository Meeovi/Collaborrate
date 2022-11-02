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
import { Prisma, apitoken } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class apitokenCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.apitokenFindManyArgs,
  ): Promise<Result<PaginationInterface<apitoken>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.apitoken.findMany(filter),
        this.prismaService.apitoken.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get apitoken Resources.`));
    }
  }

  async getById(id: string): Promise<Result<apitoken, Error>> {
    try {
      const result = await this.prismaService.apitoken.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`apitoken Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.apitokenCreateInput): Promise<Result<apitoken, Error>> {
    try {
      const result = await this.prismaService.apitoken.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create apitoken Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.apitokenUpdateInput,
  ): Promise<Result<apitoken, Error>> {
    try {
      const result = await this.prismaService.apitoken.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update apitoken Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<apitoken, Error>> {
    try {
      const result = await this.prismaService.apitoken.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete apitoken Resource ${id}.`,
      ));
    }
  }
}
