import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCurrency_ratesArgs } from "./args/UpdateOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_rates)
export class UpdateOneCurrency_ratesResolver {
  @TypeGraphQL.Mutation(_returns => Currency_rates, {
    nullable: true
  })
  async updateOneCurrency_rates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCurrency_ratesArgs): Promise<Currency_rates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_rates.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
