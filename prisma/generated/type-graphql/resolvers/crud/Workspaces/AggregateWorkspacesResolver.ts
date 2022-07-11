import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspacesArgs } from "./args/AggregateWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
import { AggregateWorkspaces } from "../../outputs/AggregateWorkspaces";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workspaces)
export class AggregateWorkspacesResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkspaces, {
    nullable: false
  })
  async aggregateWorkspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkspacesArgs): Promise<AggregateWorkspaces> {
    return getPrismaFromContext(ctx).workspaces.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
