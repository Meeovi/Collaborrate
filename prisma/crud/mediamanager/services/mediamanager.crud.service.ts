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
import { Prisma, mediamanager } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class mediamanagerCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.mediamanagerFindManyArgs,
  ): Promise<Result<PaginationInterface<mediamanager>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.mediamanager.findMany(filter),
        this.prismaService.mediamanager.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get mediamanager Resources.`));
    }
  }

  async getById(id: string): Promise<Result<mediamanager, Error>> {
    try {
      const result = await this.prismaService.mediamanager.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`mediamanager Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.mediamanagerCreateInput): Promise<Result<mediamanager, Error>> {
    try {
      const result = await this.prismaService.mediamanager.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create mediamanager Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.mediamanagerUpdateInput,
  ): Promise<Result<mediamanager, Error>> {
    try {
      const result = await this.prismaService.mediamanager.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update mediamanager Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<mediamanager, Error>> {
    try {
      const result = await this.prismaService.mediamanager.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete mediamanager Resource ${id}.`,
      ));
    }
  }
}
