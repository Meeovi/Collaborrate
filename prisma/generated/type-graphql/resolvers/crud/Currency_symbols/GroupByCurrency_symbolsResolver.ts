import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCurrency_symbolsArgs } from "./args/GroupByCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
import { Currency_symbolsGroupBy } from "../../outputs/Currency_symbolsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_symbols)
export class GroupByCurrency_symbolsResolver {
  @TypeGraphQL.Query(_returns => [Currency_symbolsGroupBy], {
    nullable: false
  })
  async groupByCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCurrency_symbolsArgs): Promise<Currency_symbolsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
