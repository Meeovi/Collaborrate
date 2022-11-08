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
import { Prisma, webhooks } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class webhooksCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.webhooksFindManyArgs,
  ): Promise<Result<PaginationInterface<webhooks>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.webhooks.findMany(filter),
        this.prismaService.webhooks.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get webhooks Resources.`));
    }
  }

  async getById(id: string): Promise<Result<webhooks, Error>> {
    try {
      const result = await this.prismaService.webhooks.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`webhooks Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.webhooksCreateInput): Promise<Result<webhooks, Error>> {
    try {
      const result = await this.prismaService.webhooks.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create webhooks Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.webhooksUpdateInput,
  ): Promise<Result<webhooks, Error>> {
    try {
      const result = await this.prismaService.webhooks.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update webhooks Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<webhooks, Error>> {
    try {
      const result = await this.prismaService.webhooks.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete webhooks Resource ${id}.`,
      ));
    }
  }
}
