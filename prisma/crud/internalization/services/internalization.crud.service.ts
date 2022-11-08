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
import { Prisma, internalization } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class internalizationCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.internalizationFindManyArgs,
  ): Promise<Result<PaginationInterface<internalization>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.internalization.findMany(filter),
        this.prismaService.internalization.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get internalization Resources.`));
    }
  }

  async getById(id: string): Promise<Result<internalization, Error>> {
    try {
      const result = await this.prismaService.internalization.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`internalization Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.internalizationCreateInput): Promise<Result<internalization, Error>> {
    try {
      const result = await this.prismaService.internalization.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create internalization Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.internalizationUpdateInput,
  ): Promise<Result<internalization, Error>> {
    try {
      const result = await this.prismaService.internalization.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update internalization Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<internalization, Error>> {
    try {
      const result = await this.prismaService.internalization.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete internalization Resource ${id}.`,
      ));
    }
  }
}
