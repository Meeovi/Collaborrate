import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSegmentsArgs } from "./args/AggregateSegmentsArgs";
import { Segments } from "../../../models/Segments";
import { AggregateSegments } from "../../outputs/AggregateSegments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Segments)
export class AggregateSegmentsResolver {
  @TypeGraphQL.Query(_returns => AggregateSegments, {
    nullable: false
  })
  async aggregateSegments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSegmentsArgs): Promise<AggregateSegments> {
    return getPrismaFromContext(ctx).segments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
