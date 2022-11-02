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
import { Prisma, contracts } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class contractsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.contractsFindManyArgs,
  ): Promise<Result<PaginationInterface<contracts>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.contracts.findMany(filter),
        this.prismaService.contracts.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get contracts Resources.`));
    }
  }

  async getById(id: string): Promise<Result<contracts, Error>> {
    try {
      const result = await this.prismaService.contracts.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`contracts Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.contractsCreateInput): Promise<Result<contracts, Error>> {
    try {
      const result = await this.prismaService.contracts.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create contracts Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.contractsUpdateInput,
  ): Promise<Result<contracts, Error>> {
    try {
      const result = await this.prismaService.contracts.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update contracts Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<contracts, Error>> {
    try {
      const result = await this.prismaService.contracts.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete contracts Resource ${id}.`,
      ));
    }
  }
}
