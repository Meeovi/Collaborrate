import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateChannelsArgs } from "./args/AggregateChannelsArgs";
import { Channels } from "../../../models/Channels";
import { AggregateChannels } from "../../outputs/AggregateChannels";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channels)
export class AggregateChannelsResolver {
  @TypeGraphQL.Query(_returns => AggregateChannels, {
    nullable: false
  })
  async aggregateChannels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChannelsArgs): Promise<AggregateChannels> {
    return getPrismaFromContext(ctx).channels.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
