import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsArgs } from "./args/AggregateTagsArgs";
import { Tags } from "../../../models/Tags";
import { AggregateTags } from "../../outputs/AggregateTags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tags)
export class AggregateTagsResolver {
  @TypeGraphQL.Query(_returns => AggregateTags, {
    nullable: false
  })
  async aggregateTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsArgs): Promise<AggregateTags> {
    return getPrismaFromContext(ctx).tags.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
