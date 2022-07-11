import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneAnalyticsArgs } from "./args/UpdateOneAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analytics)
export class UpdateOneAnalyticsResolver {
  @TypeGraphQL.Mutation(_returns => Analytics, {
    nullable: true
  })
  async updateOneAnalytics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAnalyticsArgs): Promise<Analytics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).analytics.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
