import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByWorkspacesArgs } from "./args/GroupByWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
import { WorkspacesGroupBy } from "../../outputs/WorkspacesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workspaces)
export class GroupByWorkspacesResolver {
  @TypeGraphQL.Query(_returns => [WorkspacesGroupBy], {
    nullable: false
  })
  async groupByWorkspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWorkspacesArgs): Promise<WorkspacesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).workspaces.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
