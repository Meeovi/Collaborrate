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
import { Prisma, ooto } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class ootoCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.ootoFindManyArgs,
  ): Promise<Result<PaginationInterface<ooto>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.ooto.findMany(filter),
        this.prismaService.ooto.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get ooto Resources.`));
    }
  }

  async getById(id: string): Promise<Result<ooto, Error>> {
    try {
      const result = await this.prismaService.ooto.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`ooto Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.ootoCreateInput): Promise<Result<ooto, Error>> {
    try {
      const result = await this.prismaService.ooto.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create ooto Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.ootoUpdateInput,
  ): Promise<Result<ooto, Error>> {
    try {
      const result = await this.prismaService.ooto.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update ooto Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<ooto, Error>> {
    try {
      const result = await this.prismaService.ooto.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete ooto Resource ${id}.`,
      ));
    }
  }
}
