import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrency_symbolsArgs } from "./args/AggregateCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
import { AggregateCurrency_symbols } from "../../outputs/AggregateCurrency_symbols";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_symbols)
export class AggregateCurrency_symbolsResolver {
  @TypeGraphQL.Query(_returns => AggregateCurrency_symbols, {
    nullable: false
  })
  async aggregateCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurrency_symbolsArgs): Promise<AggregateCurrency_symbols> {
    return getPrismaFromContext(ctx).currency_symbols.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
