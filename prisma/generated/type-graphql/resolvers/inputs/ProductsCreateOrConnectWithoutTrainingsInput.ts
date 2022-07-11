import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutTrainingsInput } from "../inputs/ProductsCreateWithoutTrainingsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutTrainingsInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutTrainingsInput;
}
