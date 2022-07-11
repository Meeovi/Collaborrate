import * as TypeGraphQL from "type-graphql";
import { Manufacturer } from "../../../models/Manufacturer";
import { Products } from "../../../models/Products";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class ManufacturerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products(@TypeGraphQL.Root() manufacturer: Manufacturer, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).manufacturer.findUnique({
      where: {
        id: manufacturer.id,
      },
    }).products({});
  }
}
