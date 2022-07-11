import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCitiesArgs } from "./args/AggregateCitiesArgs";
import { Cities } from "../../../models/Cities";
import { AggregateCities } from "../../outputs/AggregateCities";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cities)
export class AggregateCitiesResolver {
  @TypeGraphQL.Query(_returns => AggregateCities, {
    nullable: false
  })
  async aggregateCities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCitiesArgs): Promise<AggregateCities> {
    return getPrismaFromContext(ctx).cities.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
