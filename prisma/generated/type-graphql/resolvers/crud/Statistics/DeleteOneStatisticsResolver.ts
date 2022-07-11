import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneStatisticsArgs } from "./args/DeleteOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Statistics)
export class DeleteOneStatisticsResolver {
  @TypeGraphQL.Mutation(_returns => Statistics, {
    nullable: true
  })
  async deleteOneStatistics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneStatisticsArgs): Promise<Statistics | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).statistics.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
