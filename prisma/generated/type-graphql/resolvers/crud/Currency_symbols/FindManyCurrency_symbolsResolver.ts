import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCurrency_symbolsArgs } from "./args/FindManyCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_symbols)
export class FindManyCurrency_symbolsResolver {
  @TypeGraphQL.Query(_returns => [Currency_symbols], {
    nullable: false
  })
  async findManyCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCurrency_symbolsArgs): Promise<Currency_symbols[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
