import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJoin_roles__RoleArgs } from "./args/AggregateJoin_roles__RoleArgs";
import { Join_roles__Role } from "../../../models/Join_roles__Role";
import { AggregateJoin_roles__Role } from "../../outputs/AggregateJoin_roles__Role";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_roles__Role)
export class AggregateJoin_roles__RoleResolver {
  @TypeGraphQL.Query(_returns => AggregateJoin_roles__Role, {
    nullable: false
  })
  async aggregateJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJoin_roles__RoleArgs): Promise<AggregateJoin_roles__Role> {
    return getPrismaFromContext(ctx).join_roles__Role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
