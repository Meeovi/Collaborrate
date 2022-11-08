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
import { Prisma, glossary } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class glossaryCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.glossaryFindManyArgs,
  ): Promise<Result<PaginationInterface<glossary>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.glossary.findMany(filter),
        this.prismaService.glossary.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get glossary Resources.`));
    }
  }

  async getById(id: string): Promise<Result<glossary, Error>> {
    try {
      const result = await this.prismaService.glossary.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`glossary Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.glossaryCreateInput): Promise<Result<glossary, Error>> {
    try {
      const result = await this.prismaService.glossary.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create glossary Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.glossaryUpdateInput,
  ): Promise<Result<glossary, Error>> {
    try {
      const result = await this.prismaService.glossary.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update glossary Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<glossary, Error>> {
    try {
      const result = await this.prismaService.glossary.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete glossary Resource ${id}.`,
      ));
    }
  }
}
