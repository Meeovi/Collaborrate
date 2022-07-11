import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTax_rateArgs } from "./args/GroupByTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
import { Tax_rateGroupBy } from "../../outputs/Tax_rateGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rate)
export class GroupByTax_rateResolver {
  @TypeGraphQL.Query(_returns => [Tax_rateGroupBy], {
    nullable: false
  })
  async groupByTax_rate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTax_rateArgs): Promise<Tax_rateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rate.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
