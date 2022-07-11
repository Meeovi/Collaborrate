import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCurrency_ratesArgs } from "./args/CreateOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_rates)
export class CreateOneCurrency_ratesResolver {
  @TypeGraphQL.Mutation(_returns => Currency_rates, {
    nullable: false
  })
  async createOneCurrency_rates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCurrency_ratesArgs): Promise<Currency_rates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_rates.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
