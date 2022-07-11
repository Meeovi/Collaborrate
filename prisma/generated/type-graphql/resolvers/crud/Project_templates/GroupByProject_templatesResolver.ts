import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProject_templatesArgs } from "./args/GroupByProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
import { Project_templatesGroupBy } from "../../outputs/Project_templatesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project_templates)
export class GroupByProject_templatesResolver {
  @TypeGraphQL.Query(_returns => [Project_templatesGroupBy], {
    nullable: false
  })
  async groupByProject_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProject_templatesArgs): Promise<Project_templatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).project_templates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
