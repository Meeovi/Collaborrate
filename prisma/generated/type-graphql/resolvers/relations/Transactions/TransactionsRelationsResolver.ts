import * as TypeGraphQL from "type-graphql";
import { Customer_payment } from "../../../models/Customer_payment";
import { Orders } from "../../../models/Orders";
import { Transactions } from "../../../models/Transactions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transactions)
export class TransactionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Orders, {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() transactions: Transactions, @TypeGraphQL.Ctx() ctx: any): Promise<Orders> {
    return getPrismaFromContext(ctx).transactions.findUnique({
      where: {
        id: transactions.id,
      },
    }).orders({});
  }

  @TypeGraphQL.FieldResolver(_type => Customer_payment, {
    nullable: false
  })
  async customer_payment(@TypeGraphQL.Root() transactions: Transactions, @TypeGraphQL.Ctx() ctx: any): Promise<Customer_payment> {
    return getPrismaFromContext(ctx).transactions.findUnique({
      where: {
        id: transactions.id,
      },
    }).customer_payment({});
  }
}
