import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCountriesArgs } from "./args/AggregateCountriesArgs";
import { Countries } from "../../../models/Countries";
import { AggregateCountries } from "../../outputs/AggregateCountries";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Countries)
export class AggregateCountriesResolver {
  @TypeGraphQL.Query(_returns => AggregateCountries, {
    nullable: false
  })
  async aggregateCountries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCountriesArgs): Promise<AggregateCountries> {
    return getPrismaFromContext(ctx).countries.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
