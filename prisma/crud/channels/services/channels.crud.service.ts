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
import { Prisma, channels } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class channelsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.channelsFindManyArgs,
  ): Promise<Result<PaginationInterface<channels>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.channels.findMany(filter),
        this.prismaService.channels.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get channels Resources.`));
    }
  }

  async getById(id: string): Promise<Result<channels, Error>> {
    try {
      const result = await this.prismaService.channels.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`channels Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.channelsCreateInput): Promise<Result<channels, Error>> {
    try {
      const result = await this.prismaService.channels.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create channels Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.channelsUpdateInput,
  ): Promise<Result<channels, Error>> {
    try {
      const result = await this.prismaService.channels.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update channels Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<channels, Error>> {
    try {
      const result = await this.prismaService.channels.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete channels Resource ${id}.`,
      ));
    }
  }
}
