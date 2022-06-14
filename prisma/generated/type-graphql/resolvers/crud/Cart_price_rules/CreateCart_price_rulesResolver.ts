import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCart_price_rulesArgs } from "./args/CreateCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class CreateCart_price_rulesResolver {
  @TypeGraphQL.Mutation(_returns => Cart_price_rules, {
    nullable: false
  })
  async createCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCart_price_rulesArgs): Promise<Cart_price_rules> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
