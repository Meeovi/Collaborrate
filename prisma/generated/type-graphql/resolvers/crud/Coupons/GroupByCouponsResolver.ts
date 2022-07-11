import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCouponsArgs } from "./args/GroupByCouponsArgs";
import { Coupons } from "../../../models/Coupons";
import { CouponsGroupBy } from "../../outputs/CouponsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Coupons)
export class GroupByCouponsResolver {
  @TypeGraphQL.Query(_returns => [CouponsGroupBy], {
    nullable: false
  })
  async groupByCoupons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCouponsArgs): Promise<CouponsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).coupons.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
