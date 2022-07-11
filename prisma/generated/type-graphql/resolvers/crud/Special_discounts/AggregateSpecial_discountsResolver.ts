import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSpecial_discountsArgs } from "./args/AggregateSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
import { AggregateSpecial_discounts } from "../../outputs/AggregateSpecial_discounts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Special_discounts)
export class AggregateSpecial_discountsResolver {
  @TypeGraphQL.Query(_returns => AggregateSpecial_discounts, {
    nullable: false
  })
  async aggregateSpecial_discounts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSpecial_discountsArgs): Promise<AggregateSpecial_discounts> {
    return getPrismaFromContext(ctx).special_discounts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
