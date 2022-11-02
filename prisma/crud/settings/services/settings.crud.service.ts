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
import { Prisma, settings } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class settingsCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.settingsFindManyArgs,
  ): Promise<Result<PaginationInterface<settings>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.settings.findMany(filter),
        this.prismaService.settings.count({ where: filter?.where }),
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
      return err(new InternalServerErrorException(`Could not get settings Resources.`));
    }
  }

  async getById(id: string): Promise<Result<settings, Error>> {
    try {
      const result = await this.prismaService.settings.findUniqueOrThrow({
        where: { id: id }
      });
      return ok(result);
    } catch(e) {
      return err(new NotFoundException(`settings Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.settingsCreateInput): Promise<Result<settings, Error>> {
    try {
      const result = await this.prismaService.settings.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(`Could not create settings Resource.`));
    }
  }

  async update(
    id: string,
    data: Prisma.settingsUpdateInput,
  ): Promise<Result<settings, Error>> {
    try {
      const result = await this.prismaService.settings.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not update settings Resource ${id}.`,
      ));
    }
  }

  async delete(id: string): Promise<Result<settings, Error>> {
    try {
      const result = await this.prismaService.settings.delete({ where: { id: id } });
      return ok(result);
    } catch (e) {
      return err(new InternalServerErrorException(
        `Could not delete settings Resource ${id}.`,
      ));
    }
  }
}
