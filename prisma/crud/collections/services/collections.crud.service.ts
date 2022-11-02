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
import { Prisma, collections } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class collectionsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.collectionsFindManyArgs,
  ): Promise<Result<PaginationInterface<collections>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.collections.findMany(filter),
        this.prismaService.collections.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get collections Resources.`));
    }
  }

  async getById(id: string): Promise<Result<collections, Error>> {
    try {
      const result = await this.prismaService.collections.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`collections Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.collectionsCreateInput): Promise<Result<collections, Error>> {
    try {
      const result = await this.prismaService.collections.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create collections Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.collectionsUpdateInput,
  ): Promise<Result<collections, Error>> {
    try {
      const result = await this.prismaService.collections.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update collections Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<collections, Error>> {
    try {
      const result = await this.prismaService.collections.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete collections Resource ${id}.`,
      ));
    }
  }
}
