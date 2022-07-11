import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstManufacturerArgs } from "./args/FindFirstManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class FindFirstManufacturerResolver {
  @TypeGraphQL.Query(_returns => Manufacturer, {
    nullable: true
  })
  async findFirstManufacturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstManufacturerArgs): Promise<Manufacturer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).manufacturer.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
