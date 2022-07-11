import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketingArgs } from "./args/AggregateTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
import { AggregateTicketing } from "../../outputs/AggregateTicketing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ticketing)
export class AggregateTicketingResolver {
  @TypeGraphQL.Query(_returns => AggregateTicketing, {
    nullable: false
  })
  async aggregateTicketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketingArgs): Promise<AggregateTicketing> {
    return getPrismaFromContext(ctx).ticketing.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
