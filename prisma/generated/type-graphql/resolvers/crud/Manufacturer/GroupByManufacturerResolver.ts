import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByManufacturerArgs } from "./args/GroupByManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { ManufacturerGroupBy } from "../../outputs/ManufacturerGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class GroupByManufacturerResolver {
  @TypeGraphQL.Query(_returns => [ManufacturerGroupBy], {
    nullable: false
  })
  async groupByManufacturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByManufacturerArgs): Promise<ManufacturerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).manufacturer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
