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
import { Prisma, attributes } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class attributesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.attributesFindManyArgs,
  ): Promise<Result<PaginationInterface<attributes>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.attributes.findMany(filter),
        this.prismaService.attributes.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get attributes Resources.`));
    }
  }

  async getById(id: string): Promise<Result<attributes, Error>> {
    try {
      const result = await this.prismaService.attributes.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`attributes Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.attributesCreateInput): Promise<Result<attributes, Error>> {
    try {
      const result = await this.prismaService.attributes.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create attributes Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.attributesUpdateInput,
  ): Promise<Result<attributes, Error>> {
    try {
      const result = await this.prismaService.attributes.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update attributes Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<attributes, Error>> {
    try {
      const result = await this.prismaService.attributes.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete attributes Resource ${id}.`,
      ));
    }
  }
}
