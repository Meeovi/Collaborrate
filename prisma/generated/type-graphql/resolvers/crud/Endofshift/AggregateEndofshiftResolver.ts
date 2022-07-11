import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEndofshiftArgs } from "./args/AggregateEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
import { AggregateEndofshift } from "../../outputs/AggregateEndofshift";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Endofshift)
export class AggregateEndofshiftResolver {
  @TypeGraphQL.Query(_returns => AggregateEndofshift, {
    nullable: false
  })
  async aggregateEndofshift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEndofshiftArgs): Promise<AggregateEndofshift> {
    return getPrismaFromContext(ctx).endofshift.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
