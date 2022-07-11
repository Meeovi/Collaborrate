import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWebhooksArgs } from "./args/AggregateWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
import { AggregateWebhooks } from "../../outputs/AggregateWebhooks";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Webhooks)
export class AggregateWebhooksResolver {
  @TypeGraphQL.Query(_returns => AggregateWebhooks, {
    nullable: false
  })
  async aggregateWebhooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWebhooksArgs): Promise<AggregateWebhooks> {
    return getPrismaFromContext(ctx).webhooks.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
