import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertAnalyticsArgs } from "./args/UpsertAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analytics)
export class UpsertAnalyticsResolver {
  @TypeGraphQL.Mutation(_returns => Analytics, {
    nullable: false
  })
  async upsertAnalytics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertAnalyticsArgs): Promise<Analytics> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).analytics.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
