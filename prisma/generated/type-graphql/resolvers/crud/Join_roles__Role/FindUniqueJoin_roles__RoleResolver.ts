import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueJoin_roles__RoleArgs } from "./args/FindUniqueJoin_roles__RoleArgs";
import { Join_roles__Role } from "../../../models/Join_roles__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_roles__Role)
export class FindUniqueJoin_roles__RoleResolver {
  @TypeGraphQL.Query(_returns => Join_roles__Role, {
    nullable: true
  })
  async join_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJoin_roles__RoleArgs): Promise<Join_roles__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
