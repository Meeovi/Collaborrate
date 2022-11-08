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
import { Prisma, leads } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class leadsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.leadsFindManyArgs,
  ): Promise<Result<PaginationInterface<leads>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.leads.findMany(filter),
        this.prismaService.leads.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get leads Resources.`));
    }
  }

  async getById(id: string): Promise<Result<leads, Error>> {
    try {
      const result = await this.prismaService.leads.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`leads Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.leadsCreateInput): Promise<Result<leads, Error>> {
    try {
      const result = await this.prismaService.leads.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create leads Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.leadsUpdateInput,
  ): Promise<Result<leads, Error>> {
    try {
      const result = await this.prismaService.leads.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update leads Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<leads, Error>> {
    try {
      const result = await this.prismaService.leads.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete leads Resource ${id}.`,
      ));
    }
  }
}
