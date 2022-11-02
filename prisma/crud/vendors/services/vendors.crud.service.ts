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
import { Prisma, vendors } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class vendorsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.vendorsFindManyArgs,
  ): Promise<Result<PaginationInterface<vendors>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.vendors.findMany(filter),
        this.prismaService.vendors.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get vendors Resources.`));
    }
  }

  async getById(id: string): Promise<Result<vendors, Error>> {
    try {
      const result = await this.prismaService.vendors.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`vendors Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.vendorsCreateInput): Promise<Result<vendors, Error>> {
    try {
      const result = await this.prismaService.vendors.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create vendors Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.vendorsUpdateInput,
  ): Promise<Result<vendors, Error>> {
    try {
      const result = await this.prismaService.vendors.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update vendors Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<vendors, Error>> {
    try {
      const result = await this.prismaService.vendors.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete vendors Resource ${id}.`,
      ));
    }
  }
}
