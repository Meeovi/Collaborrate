import * as TypeGraphQL from "type-graphql";
import { Agreements } from "../../../models/Agreements";
import { Brands } from "../../../models/Brands";
import { Comments } from "../../../models/Comments";
import { Customers } from "../../../models/Customers";
import { Mediamanager } from "../../../models/Mediamanager";
import { Products } from "../../../models/Products";
import { Tasks } from "../../../models/Tasks";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mediamanager)
export class MediamanagerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Agreements, {
    nullable: true
  })
  async agreements_agreementsTomediamanager(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Agreements | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).agreements_agreementsTomediamanager({});
  }

  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: true
  })
  async customers(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Customers | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Brands, {
    nullable: true
  })
  async brands_brandsTomediamanager(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Brands | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).brands_brandsTomediamanager({});
  }

  @TypeGraphQL.FieldResolver(_type => Comments, {
    nullable: true
  })
  async comments(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Comments | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).comments({});
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: true
  })
  async users(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Users | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).users({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products_mediamanagerToproducts(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).products_mediamanagerToproducts({});
  }

  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: true
  })
  async tasks(@TypeGraphQL.Root() mediamanager: Mediamanager, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks | null> {
    return getPrismaFromContext(ctx).mediamanager.findUnique({
      where: {
        id: mediamanager.id,
      },
    }).tasks({});
  }
}
