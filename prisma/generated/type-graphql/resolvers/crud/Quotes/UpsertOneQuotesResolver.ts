import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneQuotesArgs } from "./args/UpsertOneQuotesArgs";
import { Quotes } from "../../../models/Quotes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Quotes)
export class UpsertOneQuotesResolver {
  @TypeGraphQL.Mutation(_returns => Quotes, {
    nullable: false
  })
  async upsertOneQuotes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneQuotesArgs): Promise<Quotes> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).quotes.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
