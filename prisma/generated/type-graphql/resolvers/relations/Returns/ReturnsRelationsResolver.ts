import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Products } from "../../../models/Products";
import { Returns } from "../../../models/Returns";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Returns)
export class ReturnsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() returns: Returns, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).returns.findUnique({
      where: {
        id: returns.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() returns: Returns, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).returns.findUnique({
      where: {
        id: returns.id,
      },
    }).products({});
  }
}
