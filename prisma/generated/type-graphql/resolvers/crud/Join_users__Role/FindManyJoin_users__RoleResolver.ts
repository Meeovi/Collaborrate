import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyJoin_users__RoleArgs } from "./args/FindManyJoin_users__RoleArgs";
import { Join_users__Role } from "../../../models/Join_users__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_users__Role)
export class FindManyJoin_users__RoleResolver {
  @TypeGraphQL.Query(_returns => [Join_users__Role], {
    nullable: false
  })
  async join_users__Roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyJoin_users__RoleArgs): Promise<Join_users__Role[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
