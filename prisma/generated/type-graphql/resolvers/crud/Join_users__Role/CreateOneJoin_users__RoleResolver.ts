import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneJoin_users__RoleArgs } from "./args/CreateOneJoin_users__RoleArgs";
import { Join_users__Role } from "../../../models/Join_users__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_users__Role)
export class CreateOneJoin_users__RoleResolver {
  @TypeGraphQL.Mutation(_returns => Join_users__Role, {
    nullable: false
  })
  async createOneJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneJoin_users__RoleArgs): Promise<Join_users__Role> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
