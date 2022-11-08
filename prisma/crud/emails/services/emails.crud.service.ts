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
import { Prisma, emails } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class emailsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.emailsFindManyArgs,
  ): Promise<Result<PaginationInterface<emails>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.emails.findMany(filter),
        this.prismaService.emails.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get emails Resources.`));
    }
  }

  async getById(id: string): Promise<Result<emails, Error>> {
    try {
      const result = await this.prismaService.emails.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`emails Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.emailsCreateInput): Promise<Result<emails, Error>> {
    try {
      const result = await this.prismaService.emails.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create emails Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.emailsUpdateInput,
  ): Promise<Result<emails, Error>> {
    try {
      const result = await this.prismaService.emails.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update emails Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<emails, Error>> {
    try {
      const result = await this.prismaService.emails.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete emails Resource ${id}.`,
      ));
    }
  }
}
