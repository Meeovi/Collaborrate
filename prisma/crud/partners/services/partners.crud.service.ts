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
import { Prisma, partners } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class partnersCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.partnersFindManyArgs,
  ): Promise<Result<PaginationInterface<partners>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.partners.findMany(filter),
        this.prismaService.partners.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get partners Resources.`));
    }
  }

  async getById(id: string): Promise<Result<partners, Error>> {
    try {
      const result = await this.prismaService.partners.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`partners Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.partnersCreateInput): Promise<Result<partners, Error>> {
    try {
      const result = await this.prismaService.partners.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create partners Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.partnersUpdateInput,
  ): Promise<Result<partners, Error>> {
    try {
      const result = await this.prismaService.partners.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update partners Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<partners, Error>> {
    try {
      const result = await this.prismaService.partners.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete partners Resource ${id}.`,
      ));
    }
  }
}
