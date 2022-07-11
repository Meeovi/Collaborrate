import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJoin_users__RoleArgs } from "./args/AggregateJoin_users__RoleArgs";
import { Join_users__Role } from "../../../models/Join_users__Role";
import { AggregateJoin_users__Role } from "../../outputs/AggregateJoin_users__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_users__Role)
export class AggregateJoin_users__RoleResolver {
  @TypeGraphQL.Query(_returns => AggregateJoin_users__Role, {
    nullable: false
  })
  async aggregateJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJoin_users__RoleArgs): Promise<AggregateJoin_users__Role> {
    return getPrismaFromContext(ctx).join_users__Role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
