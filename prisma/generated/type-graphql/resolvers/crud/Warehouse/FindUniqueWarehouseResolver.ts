import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWarehouseArgs } from "./args/FindUniqueWarehouseArgs";
import { Warehouse } from "../../../models/Warehouse";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Warehouse)
export class FindUniqueWarehouseResolver {
  @TypeGraphQL.Query(_returns => Warehouse, {
    nullable: true
  })
  async warehouse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWarehouseArgs): Promise<Warehouse | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).warehouse.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
