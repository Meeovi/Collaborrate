import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNewsletter_subscribersArgs } from "./args/AggregateNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
import { AggregateNewsletter_subscribers } from "../../outputs/AggregateNewsletter_subscribers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Newsletter_subscribers)
export class AggregateNewsletter_subscribersResolver {
  @TypeGraphQL.Query(_returns => AggregateNewsletter_subscribers, {
    nullable: false
  })
  async aggregateNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNewsletter_subscribersArgs): Promise<AggregateNewsletter_subscribers> {
    return getPrismaFromContext(ctx).newsletter_subscribers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
