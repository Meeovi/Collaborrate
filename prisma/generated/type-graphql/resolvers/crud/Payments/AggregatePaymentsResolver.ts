import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePaymentsArgs } from "./args/AggregatePaymentsArgs";
import { Payments } from "../../../models/Payments";
import { AggregatePayments } from "../../outputs/AggregatePayments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Payments)
export class AggregatePaymentsResolver {
  @TypeGraphQL.Query(_returns => AggregatePayments, {
    nullable: false
  })
  async aggregatePayments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePaymentsArgs): Promise<AggregatePayments> {
    return getPrismaFromContext(ctx).payments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
