import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCurrency_ratesArgs } from "./args/GroupByCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
import { Currency_ratesGroupBy } from "../../outputs/Currency_ratesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_rates)
export class GroupByCurrency_ratesResolver {
  @TypeGraphQL.Query(_returns => [Currency_ratesGroupBy], {
    nullable: false
  })
  async groupByCurrency_rates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCurrency_ratesArgs): Promise<Currency_ratesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_rates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
