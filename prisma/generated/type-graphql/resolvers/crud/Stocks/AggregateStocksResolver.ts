import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStocksArgs } from "./args/AggregateStocksArgs";
import { Stocks } from "../../../models/Stocks";
import { AggregateStocks } from "../../outputs/AggregateStocks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stocks)
export class AggregateStocksResolver {
  @TypeGraphQL.Query(_returns => AggregateStocks, {
    nullable: false
  })
  async aggregateStocks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStocksArgs): Promise<AggregateStocks> {
    return getPrismaFromContext(ctx).stocks.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
