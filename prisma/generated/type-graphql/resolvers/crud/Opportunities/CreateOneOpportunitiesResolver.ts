import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneOpportunitiesArgs } from "./args/CreateOneOpportunitiesArgs";
import { Opportunities } from "../../../models/Opportunities";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Opportunities)
export class CreateOneOpportunitiesResolver {
  @TypeGraphQL.Mutation(_returns => Opportunities, {
    nullable: false
  })
  async createOneOpportunities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneOpportunitiesArgs): Promise<Opportunities> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).opportunities.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
