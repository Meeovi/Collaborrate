import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWebsitesArgs } from "./args/AggregateWebsitesArgs";
import { Websites } from "../../../models/Websites";
import { AggregateWebsites } from "../../outputs/AggregateWebsites";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Websites)
export class AggregateWebsitesResolver {
  @TypeGraphQL.Query(_returns => AggregateWebsites, {
    nullable: false
  })
  async aggregateWebsites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWebsitesArgs): Promise<AggregateWebsites> {
    return getPrismaFromContext(ctx).websites.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
