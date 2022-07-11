import * as TypeGraphQL from "type-graphql";
import { Products } from "../../../models/Products";
import { Tax_rate } from "../../../models/Tax_rate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rate)
export class Tax_rateRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() tax_rate: Tax_rate, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).tax_rate.findUnique({
      where: {
        id: tax_rate.id,
      },
    }).products({});
  }
}
