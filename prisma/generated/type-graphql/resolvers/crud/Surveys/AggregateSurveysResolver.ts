import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSurveysArgs } from "./args/AggregateSurveysArgs";
import { Surveys } from "../../../models/Surveys";
import { AggregateSurveys } from "../../outputs/AggregateSurveys";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Surveys)
export class AggregateSurveysResolver {
  @TypeGraphQL.Query(_returns => AggregateSurveys, {
    nullable: false
  })
  async aggregateSurveys(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSurveysArgs): Promise<AggregateSurveys> {
    return getPrismaFromContext(ctx).surveys.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
