import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCollectionsArgs } from "./args/GroupByCollectionsArgs";
import { Collections } from "../../../models/Collections";
import { CollectionsGroupBy } from "../../outputs/CollectionsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Collections)
export class GroupByCollectionsResolver {
  @TypeGraphQL.Query(_returns => [CollectionsGroupBy], {
    nullable: false
  })
  async groupByCollections(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCollectionsArgs): Promise<CollectionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).collections.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
