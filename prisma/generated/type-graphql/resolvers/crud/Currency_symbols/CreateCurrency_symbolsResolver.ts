import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCurrency_symbolsArgs } from "./args/CreateCurrency_symbolsArgs";
import { Currency_symbols } from "../../../models/Currency_symbols";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_symbols)
export class CreateCurrency_symbolsResolver {
  @TypeGraphQL.Mutation(_returns => Currency_symbols, {
    nullable: false
  })
  async createCurrency_symbols(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCurrency_symbolsArgs): Promise<Currency_symbols> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_symbols.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
