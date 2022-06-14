import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutProduct_attributeInput } from "../inputs/ProductsCreateOrConnectWithoutProduct_attributeInput";
import { ProductsCreateWithoutProduct_attributeInput } from "../inputs/ProductsCreateWithoutProduct_attributeInput";
import { ProductsUpdateWithoutProduct_attributeInput } from "../inputs/ProductsUpdateWithoutProduct_attributeInput";
import { ProductsUpsertWithoutProduct_attributeInput } from "../inputs/ProductsUpsertWithoutProduct_attributeInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutProduct_attributeInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutProduct_attributeInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutProduct_attributeInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutProduct_attributeInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutProduct_attributeInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutProduct_attributeInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutProduct_attributeInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutProduct_attributeInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutProduct_attributeInput | undefined;
}
