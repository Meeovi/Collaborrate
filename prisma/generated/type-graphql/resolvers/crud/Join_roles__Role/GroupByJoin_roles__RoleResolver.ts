import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByJoin_roles__RoleArgs } from "./args/GroupByJoin_roles__RoleArgs";
import { Join_roles__Role } from "../../../models/Join_roles__Role";
import { Join_roles__RoleGroupBy } from "../../outputs/Join_roles__RoleGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Join_roles__Role)
export class GroupByJoin_roles__RoleResolver {
  @TypeGraphQL.Query(_returns => [Join_roles__RoleGroupBy], {
    nullable: false
  })
  async groupByJoin_roles__Role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByJoin_roles__RoleArgs): Promise<Join_roles__RoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).join_roles__Role.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
