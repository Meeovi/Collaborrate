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
import { Prisma, newsletters } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class newslettersCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.newslettersFindManyArgs,
  ): Promise<Result<PaginationInterface<newsletters>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.newsletters.findMany(filter),
        this.prismaService.newsletters.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get newsletters Resources.`));
    }
  }

  async getById(id: string): Promise<Result<newsletters, Error>> {
    try {
      const result = await this.prismaService.newsletters.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`newsletters Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.newslettersCreateInput): Promise<Result<newsletters, Error>> {
    try {
      const result = await this.prismaService.newsletters.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create newsletters Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.newslettersUpdateInput,
  ): Promise<Result<newsletters, Error>> {
    try {
      const result = await this.prismaService.newsletters.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update newsletters Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<newsletters, Error>> {
    try {
      const result = await this.prismaService.newsletters.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete newsletters Resource ${id}.`,
      ));
    }
  }
}
