import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomer_paymentArgs } from "./args/GroupByCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
import { Customer_paymentGroupBy } from "../../outputs/Customer_paymentGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_payment)
export class GroupByCustomer_paymentResolver {
  @TypeGraphQL.Query(_returns => [Customer_paymentGroupBy], {
    nullable: false
  })
  async groupByCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomer_paymentArgs): Promise<Customer_paymentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
