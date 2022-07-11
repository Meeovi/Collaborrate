import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCurrency_ratesArgs } from "./args/UpsertOneCurrency_ratesArgs";
import { Currency_rates } from "../../../models/Currency_rates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currency_rates)
export class UpsertOneCurrency_ratesResolver {
  @TypeGraphQL.Mutation(_returns => Currency_rates, {
    nullable: false
  })
  async upsertOneCurrency_rates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCurrency_ratesArgs): Promise<Currency_rates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currency_rates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
