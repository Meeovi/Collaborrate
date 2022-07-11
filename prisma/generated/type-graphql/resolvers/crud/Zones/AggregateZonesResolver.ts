import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateZonesArgs } from "./args/AggregateZonesArgs";
import { Zones } from "../../../models/Zones";
import { AggregateZones } from "../../outputs/AggregateZones";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Zones)
export class AggregateZonesResolver {
  @TypeGraphQL.Query(_returns => AggregateZones, {
    nullable: false
  })
  async aggregateZones(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateZonesArgs): Promise<AggregateZones> {
    return getPrismaFromContext(ctx).zones.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
