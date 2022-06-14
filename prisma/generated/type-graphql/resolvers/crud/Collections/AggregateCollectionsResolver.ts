import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCollectionsArgs } from "./args/AggregateCollectionsArgs";
import { Collections } from "../../../models/Collections";
import { AggregateCollections } from "../../outputs/AggregateCollections";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Collections)
export class AggregateCollectionsResolver {
  @TypeGraphQL.Query(_returns => AggregateCollections, {
    nullable: false
  })
  async aggregateCollections(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCollectionsArgs): Promise<AggregateCollections> {
    return getPrismaFromContext(ctx).collections.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
