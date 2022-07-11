import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateQuotesArgs } from "./args/AggregateQuotesArgs";
import { Quotes } from "../../../models/Quotes";
import { AggregateQuotes } from "../../outputs/AggregateQuotes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Quotes)
export class AggregateQuotesResolver {
  @TypeGraphQL.Query(_returns => AggregateQuotes, {
    nullable: false
  })
  async aggregateQuotes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateQuotesArgs): Promise<AggregateQuotes> {
    return getPrismaFromContext(ctx).quotes.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
