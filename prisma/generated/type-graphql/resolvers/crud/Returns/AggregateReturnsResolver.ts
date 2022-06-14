import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReturnsArgs } from "./args/AggregateReturnsArgs";
import { Returns } from "../../../models/Returns";
import { AggregateReturns } from "../../outputs/AggregateReturns";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Returns)
export class AggregateReturnsResolver {
  @TypeGraphQL.Query(_returns => AggregateReturns, {
    nullable: false
  })
  async aggregateReturns(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReturnsArgs): Promise<AggregateReturns> {
    return getPrismaFromContext(ctx).returns.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
