import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMessagesArgs } from "./args/AggregateMessagesArgs";
import { Messages } from "../../../models/Messages";
import { AggregateMessages } from "../../outputs/AggregateMessages";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Messages)
export class AggregateMessagesResolver {
  @TypeGraphQL.Query(_returns => AggregateMessages, {
    nullable: false
  })
  async aggregateMessages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMessagesArgs): Promise<AggregateMessages> {
    return getPrismaFromContext(ctx).messages.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
