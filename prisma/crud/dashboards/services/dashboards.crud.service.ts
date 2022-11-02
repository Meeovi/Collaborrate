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
import { Prisma, dashboards } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class dashboardsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.dashboardsFindManyArgs,
  ): Promise<Result<PaginationInterface<dashboards>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.dashboards.findMany(filter),
        this.prismaService.dashboards.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get dashboards Resources.`));
    }
  }

  async getById(id: string): Promise<Result<dashboards, Error>> {
    try {
      const result = await this.prismaService.dashboards.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`dashboards Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.dashboardsCreateInput): Promise<Result<dashboards, Error>> {
    try {
      const result = await this.prismaService.dashboards.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create dashboards Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.dashboardsUpdateInput,
  ): Promise<Result<dashboards, Error>> {
    try {
      const result = await this.prismaService.dashboards.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update dashboards Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<dashboards, Error>> {
    try {
      const result = await this.prismaService.dashboards.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete dashboards Resource ${id}.`,
      ));
    }
  }
}
