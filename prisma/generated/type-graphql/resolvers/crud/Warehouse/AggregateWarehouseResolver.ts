import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWarehouseArgs } from "./args/AggregateWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
import { AggregateWarehouse } from "../../outputs/AggregateWarehouse";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Warehouse)
export class AggregateWarehouseResolver {
  @TypeGraphQL.Query(_returns => AggregateWarehouse, {
    nullable: false
  })
  async aggregateWarehouse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWarehouseArgs): Promise<AggregateWarehouse> {
    return getPrismaFromContext(ctx).warehouse.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
