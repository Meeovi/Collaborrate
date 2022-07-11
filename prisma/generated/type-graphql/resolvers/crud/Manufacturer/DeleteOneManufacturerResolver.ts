import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneManufacturerArgs } from "./args/DeleteOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class DeleteOneManufacturerResolver {
  @TypeGraphQL.Mutation(_returns => Manufacturer, {
    nullable: true
  })
  async deleteOneManufacturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneManufacturerArgs): Promise<Manufacturer | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).manufacturer.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
