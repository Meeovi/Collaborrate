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
import { Prisma, customizations } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class customizationsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.customizationsFindManyArgs,
  ): Promise<Result<PaginationInterface<customizations>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.customizations.findMany(filter),
        this.prismaService.customizations.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get customizations Resources.`));
    }
  }

  async getById(id: string): Promise<Result<customizations, Error>> {
    try {
      const result = await this.prismaService.customizations.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`customizations Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.customizationsCreateInput): Promise<Result<customizations, Error>> {
    try {
      const result = await this.prismaService.customizations.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create customizations Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.customizationsUpdateInput,
  ): Promise<Result<customizations, Error>> {
    try {
      const result = await this.prismaService.customizations.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update customizations Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<customizations, Error>> {
    try {
      const result = await this.prismaService.customizations.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete customizations Resource ${id}.`,
      ));
    }
  }
}
