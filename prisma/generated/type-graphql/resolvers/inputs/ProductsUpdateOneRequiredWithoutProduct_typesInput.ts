import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutProduct_typesInput } from "../inputs/ProductsCreateOrConnectWithoutProduct_typesInput";
import { ProductsCreateWithoutProduct_typesInput } from "../inputs/ProductsCreateWithoutProduct_typesInput";
import { ProductsUpdateWithoutProduct_typesInput } from "../inputs/ProductsUpdateWithoutProduct_typesInput";
import { ProductsUpsertWithoutProduct_typesInput } from "../inputs/ProductsUpsertWithoutProduct_typesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutProduct_typesInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutProduct_typesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_typesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutProduct_typesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutProduct_typesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutProduct_typesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutProduct_typesInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutProduct_typesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutProduct_typesInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutProduct_typesInput | undefined;
}
