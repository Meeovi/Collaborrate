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
import { Prisma, shipments } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class shipmentsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.shipmentsFindManyArgs,
  ): Promise<Result<PaginationInterface<shipments>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.shipments.findMany(filter),
        this.prismaService.shipments.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get shipments Resources.`));
    }
  }

  async getById(id: string): Promise<Result<shipments, Error>> {
    try {
      const result = await this.prismaService.shipments.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`shipments Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.shipmentsCreateInput): Promise<Result<shipments, Error>> {
    try {
      const result = await this.prismaService.shipments.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create shipments Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.shipmentsUpdateInput,
  ): Promise<Result<shipments, Error>> {
    try {
      const result = await this.prismaService.shipments.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update shipments Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<shipments, Error>> {
    try {
      const result = await this.prismaService.shipments.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete shipments Resource ${id}.`,
      ));
    }
  }
}
