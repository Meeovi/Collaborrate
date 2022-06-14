import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOpportunitiesArgs } from "./args/DeleteOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Opportunities)
export class DeleteOpportunitiesResolver {
  @TypeGraphQL.Mutation(_returns => Opportunities, {
    nullable: true
  })
  async deleteOpportunities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOpportunitiesArgs): Promise<Opportunities | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).opportunities.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
