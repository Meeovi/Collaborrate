import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePushStatusArgs } from "./args/AggregatePushStatusArgs";
import { PushStatus } from "../../../models/PushStatus";
import { AggregatePushStatus } from "../../outputs/AggregatePushStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PushStatus)
export class AggregatePushStatusResolver {
  @TypeGraphQL.Query(_returns => AggregatePushStatus, {
    nullable: false
  })
  async aggregatePushStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePushStatusArgs): Promise<AggregatePushStatus> {
    return getPrismaFromContext(ctx).pushStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
