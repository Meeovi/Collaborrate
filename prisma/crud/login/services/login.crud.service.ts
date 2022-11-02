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
import { Prisma, logIn } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class logInCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.logInFindManyArgs,
  ): Promise<Result<PaginationInterface<logIn>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.logIn.findMany(filter),
        this.prismaService.logIn.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get logIn Resources.`));
    }
  }

  async getById(id: string): Promise<Result<logIn, Error>> {
    try {
      const result = await this.prismaService.logIn.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`logIn Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.logInCreateInput): Promise<Result<logIn, Error>> {
    try {
      const result = await this.prismaService.logIn.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create logIn Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.logInUpdateInput,
  ): Promise<Result<logIn, Error>> {
    try {
      const result = await this.prismaService.logIn.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update logIn Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<logIn, Error>> {
    try {
      const result = await this.prismaService.logIn.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete logIn Resource ${id}.`,
      ));
    }
  }
}
