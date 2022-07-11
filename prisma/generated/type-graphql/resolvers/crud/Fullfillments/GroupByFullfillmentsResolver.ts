import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFullfillmentsArgs } from "./args/GroupByFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
import { FullfillmentsGroupBy } from "../../outputs/FullfillmentsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Fullfillments)
export class GroupByFullfillmentsResolver {
  @TypeGraphQL.Query(_returns => [FullfillmentsGroupBy], {
    nullable: false
  })
  async groupByFullfillments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFullfillmentsArgs): Promise<FullfillmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).fullfillments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
