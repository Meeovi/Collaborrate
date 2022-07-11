import * as TypeGraphQL from "type-graphql";
import { Products } from "../../../models/Products";
import { Tax_rule } from "../../../models/Tax_rule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rule)
export class Tax_ruleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: false
  })
  async products(@TypeGraphQL.Root() tax_rule: Tax_rule, @TypeGraphQL.Ctx() ctx: any): Promise<Products> {
    return getPrismaFromContext(ctx).tax_rule.findUnique({
      where: {
        id: tax_rule.id,
      },
    }).products({});
  }
}
