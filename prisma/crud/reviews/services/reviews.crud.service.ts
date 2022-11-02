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
import { Prisma, reviews } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class reviewsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.reviewsFindManyArgs,
  ): Promise<Result<PaginationInterface<reviews>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.reviews.findMany(filter),
        this.prismaService.reviews.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get reviews Resources.`));
    }
  }

  async getById(id: string): Promise<Result<reviews, Error>> {
    try {
      const result = await this.prismaService.reviews.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`reviews Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.reviewsCreateInput): Promise<Result<reviews, Error>> {
    try {
      const result = await this.prismaService.reviews.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create reviews Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.reviewsUpdateInput,
  ): Promise<Result<reviews, Error>> {
    try {
      const result = await this.prismaService.reviews.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update reviews Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<reviews, Error>> {
    try {
      const result = await this.prismaService.reviews.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete reviews Resource ${id}.`,
      ));
    }
  }
}
