import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutTax_ruleInput } from "../inputs/ProductsCreateOrConnectWithoutTax_ruleInput";
import { ProductsCreateWithoutTax_ruleInput } from "../inputs/ProductsCreateWithoutTax_ruleInput";
import { ProductsUpdateWithoutTax_ruleInput } from "../inputs/ProductsUpdateWithoutTax_ruleInput";
import { ProductsUpsertWithoutTax_ruleInput } from "../inputs/ProductsUpsertWithoutTax_ruleInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutTax_ruleInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_ruleInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutTax_ruleInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_ruleInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutTax_ruleInput | undefined;
}
