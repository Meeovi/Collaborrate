import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCart_price_rulesArgs } from "./args/AggregateCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { AggregateCart_price_rules } from "../../outputs/AggregateCart_price_rules";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart_price_rules)
export class AggregateCart_price_rulesResolver {
  @TypeGraphQL.Query(_returns => AggregateCart_price_rules, {
    nullable: false
  })
  async aggregateCart_price_rules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCart_price_rulesArgs): Promise<AggregateCart_price_rules> {
    return getPrismaFromContext(ctx).cart_price_rules.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
