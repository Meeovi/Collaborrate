import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrency_ratesArgs } from "./args/AggregateCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
import { AggregateCurrency_rates } from "../../outputs/AggregateCurrency_rates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_rates)
export class AggregateCurrency_ratesResolver {
  @TypeGraphQL.Query(_returns => AggregateCurrency_rates, {
    nullable: false
  })
  async aggregateCurrency_rates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurrency_ratesArgs): Promise<AggregateCurrency_rates> {
    return getPrismaFromContext(ctx).currency_rates.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
