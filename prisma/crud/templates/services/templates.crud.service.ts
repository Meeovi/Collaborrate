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
import { Prisma, templates } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class templatesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.templatesFindManyArgs,
  ): Promise<Result<PaginationInterface<templates>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.templates.findMany(filter),
        this.prismaService.templates.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get templates Resources.`));
    }
  }

  async getById(id: string): Promise<Result<templates, Error>> {
    try {
      const result = await this.prismaService.templates.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`templates Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.templatesCreateInput): Promise<Result<templates, Error>> {
    try {
      const result = await this.prismaService.templates.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create templates Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.templatesUpdateInput,
  ): Promise<Result<templates, Error>> {
    try {
      const result = await this.prismaService.templates.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update templates Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<templates, Error>> {
    try {
      const result = await this.prismaService.templates.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete templates Resource ${id}.`,
      ));
    }
  }
}
