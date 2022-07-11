import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkspacesArgs } from "./args/FindFirstWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workspaces)
export class FindFirstWorkspacesResolver {
  @TypeGraphQL.Query(_returns => Workspaces, {
    nullable: true
  })
  async findFirstWorkspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkspacesArgs): Promise<Workspaces | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).workspaces.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
