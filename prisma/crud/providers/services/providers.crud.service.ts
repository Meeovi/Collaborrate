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
import { Prisma, providers } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class providersCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.providersFindManyArgs,
  ): Promise<Result<PaginationInterface<providers>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.providers.findMany(filter),
        this.prismaService.providers.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get providers Resources.`));
    }
  }

  async getById(id: string): Promise<Result<providers, Error>> {
    try {
      const result = await this.prismaService.providers.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`providers Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.providersCreateInput): Promise<Result<providers, Error>> {
    try {
      const result = await this.prismaService.providers.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create providers Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.providersUpdateInput,
  ): Promise<Result<providers, Error>> {
    try {
      const result = await this.prismaService.providers.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update providers Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<providers, Error>> {
    try {
      const result = await this.prismaService.providers.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete providers Resource ${id}.`,
      ));
    }
  }
}
