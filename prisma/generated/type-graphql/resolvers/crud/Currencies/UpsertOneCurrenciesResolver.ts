import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCurrenciesArgs } from "./args/UpsertOneCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Currencies)
export class UpsertOneCurrenciesResolver {
  @TypeGraphQL.Mutation(_returns => Currencies, {
    nullable: false
  })
  async upsertOneCurrencies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCurrenciesArgs): Promise<Currencies> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).currencies.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
