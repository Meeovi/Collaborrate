import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutManufacturerInput } from "../inputs/ProductsCreateOrConnectWithoutManufacturerInput";
import { ProductsCreateWithoutManufacturerInput } from "../inputs/ProductsCreateWithoutManufacturerInput";
import { ProductsUpdateWithoutManufacturerInput } from "../inputs/ProductsUpdateWithoutManufacturerInput";
import { ProductsUpsertWithoutManufacturerInput } from "../inputs/ProductsUpsertWithoutManufacturerInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutManufacturerInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutManufacturerInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutManufacturerInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutManufacturerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutManufacturerInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutManufacturerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutManufacturerInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutManufacturerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutManufacturerInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutManufacturerInput | undefined;
}
