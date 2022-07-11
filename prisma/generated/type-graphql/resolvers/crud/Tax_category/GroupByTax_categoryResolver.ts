import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTax_categoryArgs } from "./args/GroupByTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
import { Tax_categoryGroupBy } from "../../outputs/Tax_categoryGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_category)
export class GroupByTax_categoryResolver {
  @TypeGraphQL.Query(_returns => [Tax_categoryGroupBy], {
    nullable: false
  })
  async groupByTax_category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTax_categoryArgs): Promise<Tax_categoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_category.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
