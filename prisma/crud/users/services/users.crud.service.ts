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
import { Prisma, users } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class usersCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.usersFindManyArgs,
  ): Promise<Result<PaginationInterface<users>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.users.findMany(filter),
        this.prismaService.users.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get users Resources.`));
    }
  }

  async getById(id: string): Promise<Result<users, Error>> {
    try {
      const result = await this.prismaService.users.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`users Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.usersCreateInput): Promise<Result<users, Error>> {
    try {
      const result = await this.prismaService.users.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create users Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.usersUpdateInput,
  ): Promise<Result<users, Error>> {
    try {
      const result = await this.prismaService.users.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update users Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<users, Error>> {
    try {
      const result = await this.prismaService.users.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete users Resource ${id}.`,
      ));
    }
  }
}
