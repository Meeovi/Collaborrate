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
import { Prisma, events } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class eventsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.eventsFindManyArgs,
  ): Promise<Result<PaginationInterface<events>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.events.findMany(filter),
        this.prismaService.events.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get events Resources.`));
    }
  }

  async getById(id: string): Promise<Result<events, Error>> {
    try {
      const result = await this.prismaService.events.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`events Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.eventsCreateInput): Promise<Result<events, Error>> {
    try {
      const result = await this.prismaService.events.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create events Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.eventsUpdateInput,
  ): Promise<Result<events, Error>> {
    try {
      const result = await this.prismaService.events.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update events Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<events, Error>> {
    try {
      const result = await this.prismaService.events.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete events Resource ${id}.`,
      ));
    }
  }
}
