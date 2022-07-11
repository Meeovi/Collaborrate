import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMeetingArgs } from "./args/AggregateMeetingArgs";
import { Meeting } from "../../../models/Meeting";
import { AggregateMeeting } from "../../outputs/AggregateMeeting";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Meeting)
export class AggregateMeetingResolver {
  @TypeGraphQL.Query(_returns => AggregateMeeting, {
    nullable: false
  })
  async aggregateMeeting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMeetingArgs): Promise<AggregateMeeting> {
    return getPrismaFromContext(ctx).meeting.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
