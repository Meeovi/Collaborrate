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
import { Prisma, endofshift } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class endofshiftCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.endofshiftFindManyArgs,
  ): Promise<Result<PaginationInterface<endofshift>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.endofshift.findMany(filter),
        this.prismaService.endofshift.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get endofshift Resources.`));
    }
  }

  async getById(id: string): Promise<Result<endofshift, Error>> {
    try {
      const result = await this.prismaService.endofshift.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`endofshift Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.endofshiftCreateInput): Promise<Result<endofshift, Error>> {
    try {
      const result = await this.prismaService.endofshift.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create endofshift Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.endofshiftUpdateInput,
  ): Promise<Result<endofshift, Error>> {
    try {
      const result = await this.prismaService.endofshift.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update endofshift Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<endofshift, Error>> {
    try {
      const result = await this.prismaService.endofshift.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete endofshift Resource ${id}.`,
      ));
    }
  }
}
