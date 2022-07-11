import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAnalyticsArgs } from "./args/FindUniqueAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analytics)
export class FindUniqueAnalyticsResolver {
  @TypeGraphQL.Query(_returns => Analytics, {
    nullable: true
  })
  async findUniqueAnalytics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAnalyticsArgs): Promise<Analytics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).analytics.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
