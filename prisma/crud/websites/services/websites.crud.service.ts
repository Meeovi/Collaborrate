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
import { Prisma, websites } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class websitesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.websitesFindManyArgs,
  ): Promise<Result<PaginationInterface<websites>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.websites.findMany(filter),
        this.prismaService.websites.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get websites Resources.`));
    }
  }

  async getById(id: string): Promise<Result<websites, Error>> {
    try {
      const result = await this.prismaService.websites.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`websites Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.websitesCreateInput): Promise<Result<websites, Error>> {
    try {
      const result = await this.prismaService.websites.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create websites Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.websitesUpdateInput,
  ): Promise<Result<websites, Error>> {
    try {
      const result = await this.prismaService.websites.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update websites Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<websites, Error>> {
    try {
      const result = await this.prismaService.websites.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete websites Resource ${id}.`,
      ));
    }
  }
}
