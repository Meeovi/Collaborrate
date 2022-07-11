import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByQuotesArgs } from "./args/GroupByQuotesArgs";
import { Quotes } from "../../../models/Quotes";
import { QuotesGroupBy } from "../../outputs/QuotesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Quotes)
export class GroupByQuotesResolver {
  @TypeGraphQL.Query(_returns => [QuotesGroupBy], {
    nullable: false
  })
  async groupByQuotes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByQuotesArgs): Promise<QuotesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).quotes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
