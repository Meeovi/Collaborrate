import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTransactionsArgs } from "./args/AggregateTransactionsArgs";
import { Transactions } from "../../../models/Transactions";
import { AggregateTransactions } from "../../outputs/AggregateTransactions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transactions)
export class AggregateTransactionsResolver {
  @TypeGraphQL.Query(_returns => AggregateTransactions, {
    nullable: false
  })
  async aggregateTransactions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTransactionsArgs): Promise<AggregateTransactions> {
    return getPrismaFromContext(ctx).transactions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
