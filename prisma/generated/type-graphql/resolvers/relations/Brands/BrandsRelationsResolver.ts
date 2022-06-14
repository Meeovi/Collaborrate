import * as TypeGraphQL from "type-graphql";
import { Brands } from "../../../models/Brands";
import { Mediamanager } from "../../../models/Mediamanager";
import { Products } from "../../../models/Products";
import { Workspaces } from "../../../models/Workspaces";
import { BrandsMediamanagerArgs } from "./args/BrandsMediamanagerArgs";
import { BrandsWorkspacesArgs } from "./args/BrandsWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Brands)
export class BrandsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products(@TypeGraphQL.Root() brands: Brands, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).brands.findUnique({
      where: {
        id: brands.id,
      },
    }).products({});
  }

  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() brands: Brands, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BrandsMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).brands.findUnique({
      where: {
        id: brands.id,
      },
    }).mediamanager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() brands: Brands, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BrandsWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).brands.findUnique({
      where: {
        id: brands.id,
      },
    }).workspaces(args);
  }
}
