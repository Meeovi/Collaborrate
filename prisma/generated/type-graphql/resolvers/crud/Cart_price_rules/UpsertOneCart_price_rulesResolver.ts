import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCart_price_rulesArgs } from "./args/UpsertOneCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class UpsertOneCart_price_rulesResolver {
  @TypeGraphQL.Mutation(_returns => Cart_price_rules, {
    nullable: false
  })
  async upsertOneCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCart_price_rulesArgs): Promise<Cart_price_rules> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
