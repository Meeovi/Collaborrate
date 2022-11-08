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
import { Prisma, opportunities } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class opportunitiesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.opportunitiesFindManyArgs,
  ): Promise<Result<PaginationInterface<opportunities>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.opportunities.findMany(filter),
        this.prismaService.opportunities.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get opportunities Resources.`));
    }
  }

  async getById(id: string): Promise<Result<opportunities, Error>> {
    try {
      const result = await this.prismaService.opportunities.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`opportunities Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.opportunitiesCreateInput): Promise<Result<opportunities, Error>> {
    try {
      const result = await this.prismaService.opportunities.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create opportunities Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.opportunitiesUpdateInput,
  ): Promise<Result<opportunities, Error>> {
    try {
      const result = await this.prismaService.opportunities.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update opportunities Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<opportunities, Error>> {
    try {
      const result = await this.prismaService.opportunities.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete opportunities Resource ${id}.`,
      ));
    }
  }
}
