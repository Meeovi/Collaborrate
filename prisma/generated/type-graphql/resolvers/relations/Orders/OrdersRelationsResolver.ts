import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Orders } from "../../../models/Orders";
import { Products } from "../../../models/Products";
import { Quotes } from "../../../models/Quotes";
import { Transactions } from "../../../models/Transactions";
import { OrdersQuotesArgs } from "./args/OrdersQuotesArgs";
import { OrdersTransactionsArgs } from "./args/OrdersTransactionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Orders)
export class OrdersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        id: orders.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        id: orders.id,
      },
    }).products({});
  }

  @TypeGraphQL.FieldResolver(_type => [Quotes], {
    nullable: false
  })
  async quotes(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrdersQuotesArgs): Promise<Quotes[]> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        id: orders.id,
      },
    }).quotes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Transactions], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Root() orders: Orders, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrdersTransactionsArgs): Promise<Transactions[]> {
    return getPrismaFromContext(ctx).orders.findUnique({
      where: {
        id: orders.id,
      },
    }).transactions(args);
  }
}
