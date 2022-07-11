import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUrl_rewritesArgs } from "./args/GroupByUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { Url_rewritesGroupBy } from "../../outputs/Url_rewritesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Url_rewrites)
export class GroupByUrl_rewritesResolver {
  @TypeGraphQL.Query(_returns => [Url_rewritesGroupBy], {
    nullable: false
  })
  async groupByUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUrl_rewritesArgs): Promise<Url_rewritesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).url_rewrites.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
