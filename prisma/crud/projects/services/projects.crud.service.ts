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
import { Prisma, projects } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class projectsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.projectsFindManyArgs,
  ): Promise<Result<PaginationInterface<projects>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.projects.findMany(filter),
        this.prismaService.projects.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get projects Resources.`));
    }
  }

  async getById(id: string): Promise<Result<projects, Error>> {
    try {
      const result = await this.prismaService.projects.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`projects Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.projectsCreateInput): Promise<Result<projects, Error>> {
    try {
      const result = await this.prismaService.projects.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create projects Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.projectsUpdateInput,
  ): Promise<Result<projects, Error>> {
    try {
      const result = await this.prismaService.projects.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update projects Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<projects, Error>> {
    try {
      const result = await this.prismaService.projects.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete projects Resource ${id}.`,
      ));
    }
  }
}
