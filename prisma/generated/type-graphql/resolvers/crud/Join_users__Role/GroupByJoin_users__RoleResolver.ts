import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByJoin_users__RoleArgs } from "./args/GroupByJoin_users__RoleArgs";
import { Join_users__Role } from "../../../models/Join_users__Role";
import { Join_users__RoleGroupBy } from "../../outputs/Join_users__RoleGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_users__Role)
export class GroupByJoin_users__RoleResolver {
  @TypeGraphQL.Query(_returns => [Join_users__RoleGroupBy], {
    nullable: false
  })
  async groupByJoin_users__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByJoin_users__RoleArgs): Promise<Join_users__RoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_users__Role.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
