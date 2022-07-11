import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneAnalyticsArgs } from "./args/CreateOneAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Analytics)
export class CreateOneAnalyticsResolver {
  @TypeGraphQL.Mutation(_returns => Analytics, {
    nullable: false
  })
  async createOneAnalytics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAnalyticsArgs): Promise<Analytics> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).analytics.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
