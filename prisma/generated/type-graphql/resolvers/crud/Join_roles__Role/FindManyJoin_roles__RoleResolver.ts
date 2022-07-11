import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyJoin_roles__RoleArgs } from "./args/FindManyJoin_roles__RoleArgs";
import { Join_roles__Role } from "../../../models/Join_roles__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_roles__Role)
export class FindManyJoin_roles__RoleResolver {
  @TypeGraphQL.Query(_returns => [Join_roles__Role], {
    nullable: false
  })
  async join_roles__Roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyJoin_roles__RoleArgs): Promise<Join_roles__Role[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
