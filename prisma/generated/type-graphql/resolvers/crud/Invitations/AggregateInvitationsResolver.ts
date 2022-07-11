import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInvitationsArgs } from "./args/AggregateInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
import { AggregateInvitations } from "../../outputs/AggregateInvitations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invitations)
export class AggregateInvitationsResolver {
  @TypeGraphQL.Query(_returns => AggregateInvitations, {
    nullable: false
  })
  async aggregateInvitations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInvitationsArgs): Promise<AggregateInvitations> {
    return getPrismaFromContext(ctx).invitations.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
