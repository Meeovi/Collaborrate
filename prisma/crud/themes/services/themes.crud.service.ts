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
import { Prisma, themes } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class themesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.themesFindManyArgs,
  ): Promise<Result<PaginationInterface<themes>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.themes.findMany(filter),
        this.prismaService.themes.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get themes Resources.`));
    }
  }

  async getById(id: string): Promise<Result<themes, Error>> {
    try {
      const result = await this.prismaService.themes.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`themes Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.themesCreateInput): Promise<Result<themes, Error>> {
    try {
      const result = await this.prismaService.themes.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create themes Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.themesUpdateInput,
  ): Promise<Result<themes, Error>> {
    try {
      const result = await this.prismaService.themes.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update themes Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<themes, Error>> {
    try {
      const result = await this.prismaService.themes.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete themes Resource ${id}.`,
      ));
    }
  }
}
