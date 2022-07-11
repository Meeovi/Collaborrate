import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectsArgs } from "./args/AggregateProjectsArgs";
import { Projects } from "../../../models/Projects";
import { AggregateProjects } from "../../outputs/AggregateProjects";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Projects)
export class AggregateProjectsResolver {
  @TypeGraphQL.Query(_returns => AggregateProjects, {
    nullable: false
  })
  async aggregateProjects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectsArgs): Promise<AggregateProjects> {
    return getPrismaFromContext(ctx).projects.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
