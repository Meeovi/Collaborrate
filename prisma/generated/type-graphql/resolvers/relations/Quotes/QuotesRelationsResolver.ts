import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Orders } from "../../../models/Orders";
import { Products } from "../../../models/Products";
import { Quotes } from "../../../models/Quotes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Quotes)
export class QuotesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers_customersToquotes(@TypeGraphQL.Root() quotes: Quotes, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).quotes.findUnique({
      where: {
        id: quotes.id,
      },
    }).customers_customersToquotes({});
  }

  @TypeGraphQL.FieldResolver(_type => Orders, {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() quotes: Quotes, @TypeGraphQL.Ctx() ctx: any): Promise<Orders> {
    return getPrismaFromContext(ctx).quotes.findUnique({
      where: {
        id: quotes.id,
      },
    }).orders({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products_productsToquotes(@TypeGraphQL.Root() quotes: Quotes, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).quotes.findUnique({
      where: {
        id: quotes.id,
      },
    }).products_productsToquotes({});
  }
}
