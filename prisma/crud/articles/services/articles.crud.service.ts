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
import { Prisma, articles } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class articlesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.articlesFindManyArgs,
  ): Promise<Result<PaginationInterface<articles>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.articles.findMany(filter),
        this.prismaService.articles.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get articles Resources.`));
    }
  }

  async getById(id: string): Promise<Result<articles, Error>> {
    try {
      const result = await this.prismaService.articles.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`articles Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.articlesCreateInput): Promise<Result<articles, Error>> {
    try {
      const result = await this.prismaService.articles.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create articles Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.articlesUpdateInput,
  ): Promise<Result<articles, Error>> {
    try {
      const result = await this.prismaService.articles.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update articles Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<articles, Error>> {
    try {
      const result = await this.prismaService.articles.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete articles Resource ${id}.`,
      ));
    }
  }
}
