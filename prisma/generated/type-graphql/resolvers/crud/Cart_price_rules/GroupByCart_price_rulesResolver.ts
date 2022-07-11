import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCart_price_rulesArgs } from "./args/GroupByCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { Cart_price_rulesGroupBy } from "../../outputs/Cart_price_rulesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class GroupByCart_price_rulesResolver {
  @TypeGraphQL.Query(_returns => [Cart_price_rulesGroupBy], {
    nullable: false
  })
  async groupByCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCart_price_rulesArgs): Promise<Cart_price_rulesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
