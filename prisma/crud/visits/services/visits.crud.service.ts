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
import { Prisma, visits } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class visitsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.visitsFindManyArgs,
  ): Promise<Result<PaginationInterface<visits>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.visits.findMany(filter),
        this.prismaService.visits.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get visits Resources.`));
    }
  }

  async getById(id: string): Promise<Result<visits, Error>> {
    try {
      const result = await this.prismaService.visits.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`visits Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.visitsCreateInput): Promise<Result<visits, Error>> {
    try {
      const result = await this.prismaService.visits.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create visits Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.visitsUpdateInput,
  ): Promise<Result<visits, Error>> {
    try {
      const result = await this.prismaService.visits.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update visits Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<visits, Error>> {
    try {
      const result = await this.prismaService.visits.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete visits Resource ${id}.`,
      ));
    }
  }
}
