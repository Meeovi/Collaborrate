import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCouponsArgs } from "./args/UpsertOneCouponsArgs";
import { Coupons } from "../../../models/Coupons";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Coupons)
export class UpsertOneCouponsResolver {
  @TypeGraphQL.Mutation(_returns => Coupons, {
    nullable: false
  })
  async upsertOneCoupons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCouponsArgs): Promise<Coupons> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).coupons.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
