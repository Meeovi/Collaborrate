import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomer_paymentArgs } from "./args/AggregateCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
import { AggregateCustomer_payment } from "../../outputs/AggregateCustomer_payment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_payment)
export class AggregateCustomer_paymentResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomer_payment, {
    nullable: false
  })
  async aggregateCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomer_paymentArgs): Promise<AggregateCustomer_payment> {
    return getPrismaFromContext(ctx).customer_payment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
