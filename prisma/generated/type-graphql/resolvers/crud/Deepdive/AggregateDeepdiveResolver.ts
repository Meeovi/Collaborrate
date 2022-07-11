import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDeepdiveArgs } from "./args/AggregateDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
import { AggregateDeepdive } from "../../outputs/AggregateDeepdive";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Deepdive)
export class AggregateDeepdiveResolver {
  @TypeGraphQL.Query(_returns => AggregateDeepdive, {
    nullable: false
  })
  async aggregateDeepdive(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeepdiveArgs): Promise<AggregateDeepdive> {
    return getPrismaFromContext(ctx).deepdive.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
