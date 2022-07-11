import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMediamanagerArgs } from "./args/AggregateMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
import { AggregateMediamanager } from "../../outputs/AggregateMediamanager";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mediamanager)
export class AggregateMediamanagerResolver {
  @TypeGraphQL.Query(_returns => AggregateMediamanager, {
    nullable: false
  })
  async aggregateMediamanager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMediamanagerArgs): Promise<AggregateMediamanager> {
    return getPrismaFromContext(ctx).mediamanager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
