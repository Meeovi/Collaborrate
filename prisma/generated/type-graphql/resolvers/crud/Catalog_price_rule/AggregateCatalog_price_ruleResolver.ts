import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCatalog_price_ruleArgs } from "./args/AggregateCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
import { AggregateCatalog_price_rule } from "../../outputs/AggregateCatalog_price_rule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Catalog_price_rule)
export class AggregateCatalog_price_ruleResolver {
  @TypeGraphQL.Query(_returns => AggregateCatalog_price_rule, {
    nullable: false
  })
  async aggregateCatalog_price_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCatalog_price_ruleArgs): Promise<AggregateCatalog_price_rule> {
    return getPrismaFromContext(ctx).catalog_price_rule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
