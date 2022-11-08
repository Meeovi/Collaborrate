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
import { Prisma, rewards } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class rewardsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.rewardsFindManyArgs,
  ): Promise<Result<PaginationInterface<rewards>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.rewards.findMany(filter),
        this.prismaService.rewards.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get rewards Resources.`));
    }
  }

  async getById(id: string): Promise<Result<rewards, Error>> {
    try {
      const result = await this.prismaService.rewards.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`rewards Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.rewardsCreateInput): Promise<Result<rewards, Error>> {
    try {
      const result = await this.prismaService.rewards.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create rewards Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.rewardsUpdateInput,
  ): Promise<Result<rewards, Error>> {
    try {
      const result = await this.prismaService.rewards.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update rewards Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<rewards, Error>> {
    try {
      const result = await this.prismaService.rewards.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete rewards Resource ${id}.`,
      ));
    }
  }
}
