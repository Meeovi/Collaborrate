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
import { Prisma, checklist } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class checklistCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.checklistFindManyArgs,
  ): Promise<Result<PaginationInterface<checklist>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.checklist.findMany(filter),
        this.prismaService.checklist.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get checklist Resources.`));
    }
  }

  async getById(id: string): Promise<Result<checklist, Error>> {
    try {
      const result = await this.prismaService.checklist.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`checklist Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.checklistCreateInput): Promise<Result<checklist, Error>> {
    try {
      const result = await this.prismaService.checklist.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create checklist Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.checklistUpdateInput,
  ): Promise<Result<checklist, Error>> {
    try {
      const result = await this.prismaService.checklist.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update checklist Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<checklist, Error>> {
    try {
      const result = await this.prismaService.checklist.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete checklist Resource ${id}.`,
      ));
    }
  }
}
