import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutReturnsInput } from "../inputs/ProductsCreateOrConnectWithoutReturnsInput";
import { ProductsCreateWithoutReturnsInput } from "../inputs/ProductsCreateWithoutReturnsInput";
import { ProductsUpdateWithoutReturnsInput } from "../inputs/ProductsUpdateWithoutReturnsInput";
import { ProductsUpsertWithoutReturnsInput } from "../inputs/ProductsUpsertWithoutReturnsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutReturnsInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutReturnsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutReturnsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutReturnsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutReturnsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutReturnsInput | undefined;
}
