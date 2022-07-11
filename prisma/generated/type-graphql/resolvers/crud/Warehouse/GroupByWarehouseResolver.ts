import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByWarehouseArgs } from "./args/GroupByWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
import { WarehouseGroupBy } from "../../outputs/WarehouseGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Warehouse)
export class GroupByWarehouseResolver {
  @TypeGraphQL.Query(_returns => [WarehouseGroupBy], {
    nullable: false
  })
  async groupByWarehouse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWarehouseArgs): Promise<WarehouseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).warehouse.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
