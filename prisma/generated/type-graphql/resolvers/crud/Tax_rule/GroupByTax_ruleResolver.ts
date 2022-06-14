import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTax_ruleArgs } from "./args/GroupByTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
import { Tax_ruleGroupBy } from "../../outputs/Tax_ruleGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rule)
export class GroupByTax_ruleResolver {
  @TypeGraphQL.Query(_returns => [Tax_ruleGroupBy], {
    nullable: false
  })
  async groupByTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTax_ruleArgs): Promise<Tax_ruleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
