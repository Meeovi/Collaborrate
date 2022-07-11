import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneJoin_users__RoleArgs } from "./args/UpdateOneJoin_users__RoleArgs";
import { Join_users__Role } from "../../../models/Join_users__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_users__Role)
export class UpdateOneJoin_users__RoleResolver {
  @TypeGraphQL.Mutation(_returns => Join_users__Role, {
    nullable: true
  })
  async updateOneJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneJoin_users__RoleArgs): Promise<Join_users__Role | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
