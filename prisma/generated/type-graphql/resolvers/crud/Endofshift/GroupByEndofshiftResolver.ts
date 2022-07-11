import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByEndofshiftArgs } from "./args/GroupByEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
import { EndofshiftGroupBy } from "../../outputs/EndofshiftGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Endofshift)
export class GroupByEndofshiftResolver {
  @TypeGraphQL.Query(_returns => [EndofshiftGroupBy], {
    nullable: false
  })
  async groupByEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEndofshiftArgs): Promise<EndofshiftGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).endofshift.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
