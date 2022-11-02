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
import { Prisma, accounts } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class accountsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.accountsFindManyArgs,
  ): Promise<Result<PaginationInterface<accounts>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.accounts.findMany(filter),
        this.prismaService.accounts.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get accounts Resources.`));
    }
  }

  async getById(id: string): Promise<Result<accounts, Error>> {
    try {
      const result = await this.prismaService.accounts.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`accounts Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.accountsCreateInput): Promise<Result<accounts, Error>> {
    try {
      const result = await this.prismaService.accounts.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create accounts Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.accountsUpdateInput,
  ): Promise<Result<accounts, Error>> {
    try {
      const result = await this.prismaService.accounts.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update accounts Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<accounts, Error>> {
    try {
      const result = await this.prismaService.accounts.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete accounts Resource ${id}.`,
      ));
    }
  }
}
