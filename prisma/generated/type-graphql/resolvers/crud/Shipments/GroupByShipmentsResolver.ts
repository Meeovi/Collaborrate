import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByShipmentsArgs } from "./args/GroupByShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
import { ShipmentsGroupBy } from "../../outputs/ShipmentsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shipments)
export class GroupByShipmentsResolver {
  @TypeGraphQL.Query(_returns => [ShipmentsGroupBy], {
    nullable: false
  })
  async groupByShipments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByShipmentsArgs): Promise<ShipmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shipments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
