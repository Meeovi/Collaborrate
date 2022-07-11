import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrdersArgs } from "./args/AggregateOrdersArgs";
import { Orders } from "../../../models/Orders";
import { AggregateOrders } from "../../outputs/AggregateOrders";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Orders)
export class AggregateOrdersResolver {
  @TypeGraphQL.Query(_returns => AggregateOrders, {
    nullable: false
  })
  async aggregateOrders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrdersArgs): Promise<AggregateOrders> {
    return getPrismaFromContext(ctx).orders.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
