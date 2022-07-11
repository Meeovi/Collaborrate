import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneStatisticsArgs } from "./args/UpdateOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Statistics)
export class UpdateOneStatisticsResolver {
  @TypeGraphQL.Mutation(_returns => Statistics, {
    nullable: true
  })
  async updateOneStatistics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneStatisticsArgs): Promise<Statistics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).statistics.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
