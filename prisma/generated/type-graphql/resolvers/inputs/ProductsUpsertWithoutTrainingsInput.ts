import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutTrainingsInput } from "../inputs/ProductsCreateWithoutTrainingsInput";
import { ProductsUpdateWithoutTrainingsInput } from "../inputs/ProductsUpdateWithoutTrainingsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutTrainingsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutTrainingsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutTrainingsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutTrainingsInput;
}
