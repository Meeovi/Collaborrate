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
import { Prisma, wishlists } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class wishlistsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.wishlistsFindManyArgs,
  ): Promise<Result<PaginationInterface<wishlists>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.wishlists.findMany(filter),
        this.prismaService.wishlists.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get wishlists Resources.`));
    }
  }

  async getById(id: string): Promise<Result<wishlists, Error>> {
    try {
      const result = await this.prismaService.wishlists.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`wishlists Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.wishlistsCreateInput): Promise<Result<wishlists, Error>> {
    try {
      const result = await this.prismaService.wishlists.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create wishlists Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.wishlistsUpdateInput,
  ): Promise<Result<wishlists, Error>> {
    try {
      const result = await this.prismaService.wishlists.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update wishlists Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<wishlists, Error>> {
    try {
      const result = await this.prismaService.wishlists.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete wishlists Resource ${id}.`,
      ));
    }
  }
}
