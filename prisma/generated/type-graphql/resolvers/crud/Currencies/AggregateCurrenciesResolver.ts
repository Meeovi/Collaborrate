import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrenciesArgs } from "./args/AggregateCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
import { AggregateCurrencies } from "../../outputs/AggregateCurrencies";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currencies)
export class AggregateCurrenciesResolver {
  @TypeGraphQL.Query(_returns => AggregateCurrencies, {
    nullable: false
  })
  async aggregateCurrencies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurrenciesArgs): Promise<AggregateCurrencies> {
    return getPrismaFromContext(ctx).currencies.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
