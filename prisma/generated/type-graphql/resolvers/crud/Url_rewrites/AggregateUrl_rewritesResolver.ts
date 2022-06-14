import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUrl_rewritesArgs } from "./args/AggregateUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { AggregateUrl_rewrites } from "../../outputs/AggregateUrl_rewrites";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Url_rewrites)
export class AggregateUrl_rewritesResolver {
  @TypeGraphQL.Query(_returns => AggregateUrl_rewrites, {
    nullable: false
  })
  async aggregateUrl_rewrites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUrl_rewritesArgs): Promise<AggregateUrl_rewrites> {
    return getPrismaFromContext(ctx).url_rewrites.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
