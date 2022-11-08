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
import { Prisma, agreements } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class agreementsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.agreementsFindManyArgs,
  ): Promise<Result<PaginationInterface<agreements>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.agreements.findMany(filter),
        this.prismaService.agreements.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get agreements Resources.`));
    }
  }

  async getById(id: string): Promise<Result<agreements, Error>> {
    try {
      const result = await this.prismaService.agreements.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`agreements Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.agreementsCreateInput): Promise<Result<agreements, Error>> {
    try {
      const result = await this.prismaService.agreements.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create agreements Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.agreementsUpdateInput,
  ): Promise<Result<agreements, Error>> {
    try {
      const result = await this.prismaService.agreements.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update agreements Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<agreements, Error>> {
    try {
      const result = await this.prismaService.agreements.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete agreements Resource ${id}.`,
      ));
    }
  }
}
