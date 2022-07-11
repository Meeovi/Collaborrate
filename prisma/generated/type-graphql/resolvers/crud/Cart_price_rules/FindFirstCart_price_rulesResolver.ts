import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCart_price_rulesArgs } from "./args/FindFirstCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class FindFirstCart_price_rulesResolver {
  @TypeGraphQL.Query(_returns => Cart_price_rules, {
    nullable: true
  })
  async findFirstCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCart_price_rulesArgs): Promise<Cart_price_rules | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
