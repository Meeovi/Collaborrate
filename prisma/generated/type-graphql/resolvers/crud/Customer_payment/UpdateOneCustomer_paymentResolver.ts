import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomer_paymentArgs } from "./args/UpdateOneCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_payment)
export class UpdateOneCustomer_paymentResolver {
  @TypeGraphQL.Mutation(_returns => Customer_payment, {
    nullable: true
  })
  async updateOneCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCustomer_paymentArgs): Promise<Customer_payment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
