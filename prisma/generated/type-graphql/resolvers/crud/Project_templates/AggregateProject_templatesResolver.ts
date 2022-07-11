import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProject_templatesArgs } from "./args/AggregateProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
import { AggregateProject_templates } from "../../outputs/AggregateProject_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project_templates)
export class AggregateProject_templatesResolver {
  @TypeGraphQL.Query(_returns => AggregateProject_templates, {
    nullable: false
  })
  async aggregateProject_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProject_templatesArgs): Promise<AggregateProject_templates> {
    return getPrismaFromContext(ctx).project_templates.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
