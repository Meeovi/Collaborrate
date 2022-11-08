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
import { Prisma, states } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class statesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.statesFindManyArgs,
  ): Promise<Result<PaginationInterface<states>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.states.findMany(filter),
        this.prismaService.states.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get states Resources.`));
    }
  }

  async getById(id: string): Promise<Result<states, Error>> {
    try {
      const result = await this.prismaService.states.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`states Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.statesCreateInput): Promise<Result<states, Error>> {
    try {
      const result = await this.prismaService.states.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create states Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.statesUpdateInput,
  ): Promise<Result<states, Error>> {
    try {
      const result = await this.prismaService.states.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update states Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<states, Error>> {
    try {
      const result = await this.prismaService.states.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete states Resource ${id}.`,
      ));
    }
  }
}
