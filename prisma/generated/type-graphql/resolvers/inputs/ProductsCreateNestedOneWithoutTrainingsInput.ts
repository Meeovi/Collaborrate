import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutTrainingsInput } from "../inputs/ProductsCreateOrConnectWithoutTrainingsInput";
import { ProductsCreateWithoutTrainingsInput } from "../inputs/ProductsCreateWithoutTrainingsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutTrainingsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
