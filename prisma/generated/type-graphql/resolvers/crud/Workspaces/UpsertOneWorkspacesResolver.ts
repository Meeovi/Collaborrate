import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWorkspacesArgs } from "./args/UpsertOneWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workspaces)
export class UpsertOneWorkspacesResolver {
  @TypeGraphQL.Mutation(_returns => Workspaces, {
    nullable: false
  })
  async upsertOneWorkspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWorkspacesArgs): Promise<Workspaces> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).workspaces.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
