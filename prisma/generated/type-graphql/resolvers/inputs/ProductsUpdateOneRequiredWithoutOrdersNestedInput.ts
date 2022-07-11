import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOrdersInput } from "../inputs/ProductsCreateOrConnectWithoutOrdersInput";
import { ProductsCreateWithoutOrdersInput } from "../inputs/ProductsCreateWithoutOrdersInput";
import { ProductsUpdateWithoutOrdersInput } from "../inputs/ProductsUpdateWithoutOrdersInput";
import { ProductsUpsertWithoutOrdersInput } from "../inputs/ProductsUpsertWithoutOrdersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutOrdersNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutOrdersInput | undefined;
}
