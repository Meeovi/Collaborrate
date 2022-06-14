import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySpecial_discountsArgs } from "./args/GroupBySpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
import { Special_discountsGroupBy } from "../../outputs/Special_discountsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Special_discounts)
export class GroupBySpecial_discountsResolver {
  @TypeGraphQL.Query(_returns => [Special_discountsGroupBy], {
    nullable: false
  })
  async groupBySpecial_discounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySpecial_discountsArgs): Promise<Special_discountsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).special_discounts.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
