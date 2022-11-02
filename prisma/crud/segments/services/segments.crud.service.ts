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
import { Prisma, segments } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class segmentsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.segmentsFindManyArgs,
  ): Promise<Result<PaginationInterface<segments>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.segments.findMany(filter),
        this.prismaService.segments.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get segments Resources.`));
    }
  }

  async getById(id: string): Promise<Result<segments, Error>> {
    try {
      const result = await this.prismaService.segments.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`segments Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.segmentsCreateInput): Promise<Result<segments, Error>> {
    try {
      const result = await this.prismaService.segments.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create segments Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.segmentsUpdateInput,
  ): Promise<Result<segments, Error>> {
    try {
      const result = await this.prismaService.segments.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update segments Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<segments, Error>> {
    try {
      const result = await this.prismaService.segments.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete segments Resource ${id}.`,
      ));
    }
  }
}
