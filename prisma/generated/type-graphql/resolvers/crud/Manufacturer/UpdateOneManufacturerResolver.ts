import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneManufacturerArgs } from "./args/UpdateOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class UpdateOneManufacturerResolver {
  @TypeGraphQL.Mutation(_returns => Manufacturer, {
    nullable: true
  })
  async updateOneManufacturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneManufacturerArgs): Promise<Manufacturer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).manufacturer.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}