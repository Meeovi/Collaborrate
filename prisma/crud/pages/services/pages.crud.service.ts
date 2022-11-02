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
import { Prisma, pages } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class pagesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.pagesFindManyArgs,
  ): Promise<Result<PaginationInterface<pages>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.pages.findMany(filter),
        this.prismaService.pages.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get pages Resources.`));
    }
  }

  async getById(id: string): Promise<Result<pages, Error>> {
    try {
      const result = await this.prismaService.pages.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`pages Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.pagesCreateInput): Promise<Result<pages, Error>> {
    try {
      const result = await this.prismaService.pages.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create pages Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.pagesUpdateInput,
  ): Promise<Result<pages, Error>> {
    try {
      const result = await this.prismaService.pages.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update pages Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<pages, Error>> {
    try {
      const result = await this.prismaService.pages.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete pages Resource ${id}.`,
      ));
    }
  }
}
