import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCouponsArgs } from "./args/AggregateCouponsArgs";
import { Coupons } from "../../../models/Coupons";
import { AggregateCoupons } from "../../outputs/AggregateCoupons";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Coupons)
export class AggregateCouponsResolver {
  @TypeGraphQL.Query(_returns => AggregateCoupons, {
    nullable: false
  })
  async aggregateCoupons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCouponsArgs): Promise<AggregateCoupons> {
    return getPrismaFromContext(ctx).coupons.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
