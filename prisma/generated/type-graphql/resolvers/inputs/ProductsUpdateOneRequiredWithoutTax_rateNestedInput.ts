import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutTax_rateInput } from "../inputs/ProductsCreateOrConnectWithoutTax_rateInput";
import { ProductsCreateWithoutTax_rateInput } from "../inputs/ProductsCreateWithoutTax_rateInput";
import { ProductsUpdateWithoutTax_rateInput } from "../inputs/ProductsUpdateWithoutTax_rateInput";
import { ProductsUpsertWithoutTax_rateInput } from "../inputs/ProductsUpsertWithoutTax_rateInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutTax_rateNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutTax_rateNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutTax_rateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_rateInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutTax_rateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutTax_rateInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutTax_rateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_rateInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutTax_rateInput | undefined;
}
