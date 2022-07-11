import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomer_paymentArgs } from "./args/CreateOneCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_payment)
export class CreateOneCustomer_paymentResolver {
  @TypeGraphQL.Mutation(_returns => Customer_payment, {
    nullable: false
  })
  async createOneCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCustomer_paymentArgs): Promise<Customer_payment> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
