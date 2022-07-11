import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAudienceArgs } from "./args/AggregateAudienceArgs";
import { Audience } from "../../../models/Audience";
import { AggregateAudience } from "../../outputs/AggregateAudience";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Audience)
export class AggregateAudienceResolver {
  @TypeGraphQL.Query(_returns => AggregateAudience, {
    nullable: false
  })
  async aggregateAudience(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAudienceArgs): Promise<AggregateAudience> {
    return getPrismaFromContext(ctx).audience.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
