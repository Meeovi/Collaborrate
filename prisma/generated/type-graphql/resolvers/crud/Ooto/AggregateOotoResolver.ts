import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOotoArgs } from "./args/AggregateOotoArgs";
import { Ooto } from "../../../models/Ooto";
import { AggregateOoto } from "../../outputs/AggregateOoto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ooto)
export class AggregateOotoResolver {
  @TypeGraphQL.Query(_returns => AggregateOoto, {
    nullable: false
  })
  async aggregateOoto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOotoArgs): Promise<AggregateOoto> {
    return getPrismaFromContext(ctx).ooto.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
