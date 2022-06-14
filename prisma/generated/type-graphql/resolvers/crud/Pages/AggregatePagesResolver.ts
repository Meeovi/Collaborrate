import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePagesArgs } from "./args/AggregatePagesArgs";
import { Pages } from "../../../models/Pages";
import { AggregatePages } from "../../outputs/AggregatePages";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pages)
export class AggregatePagesResolver {
  @TypeGraphQL.Query(_returns => AggregatePages, {
    nullable: false
  })
  async aggregatePages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePagesArgs): Promise<AggregatePages> {
    return getPrismaFromContext(ctx).pages.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
