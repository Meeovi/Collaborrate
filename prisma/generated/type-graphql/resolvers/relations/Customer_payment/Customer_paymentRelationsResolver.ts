import * as TypeGraphQL from "type-graphql";
import { Customer_payment } from "../../../models/Customer_payment";
import { Customers } from "../../../models/Customers";
import { Transactions } from "../../../models/Transactions";
import { Customer_paymentTransactionsArgs } from "./args/Customer_paymentTransactionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_payment)
export class Customer_paymentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() customer_payment: Customer_payment, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).customer_payment.findUnique({
      where: {
        id: customer_payment.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => [Transactions], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Root() customer_payment: Customer_payment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Customer_paymentTransactionsArgs): Promise<Transactions[]> {
    return getPrismaFromContext(ctx).customer_payment.findUnique({
      where: {
        id: customer_payment.id,
      },
    }).transactions(args);
  }
}
