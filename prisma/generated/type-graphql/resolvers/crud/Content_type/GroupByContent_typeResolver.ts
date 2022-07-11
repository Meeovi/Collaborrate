import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByContent_typeArgs } from "./args/GroupByContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
import { Content_typeGroupBy } from "../../outputs/Content_typeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content_type)
export class GroupByContent_typeResolver {
  @TypeGraphQL.Query(_returns => [Content_typeGroupBy], {
    nullable: false
  })
  async groupByContent_type(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContent_typeArgs): Promise<Content_typeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).content_type.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
