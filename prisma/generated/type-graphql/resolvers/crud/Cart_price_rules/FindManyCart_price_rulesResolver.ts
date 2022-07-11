import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCart_price_rulesArgs } from "./args/FindManyCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class FindManyCart_price_rulesResolver {
  @TypeGraphQL.Query(_returns => [Cart_price_rules], {
    nullable: false
  })
  async findManyCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCart_price_rulesArgs): Promise<Cart_price_rules[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cart_price_rules.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
