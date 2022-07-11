import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutRatingInput } from "../inputs/ProductsCreateWithoutRatingInput";
import { ProductsUpdateWithoutRatingInput } from "../inputs/ProductsUpdateWithoutRatingInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutRatingInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutRatingInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutRatingInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutRatingInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutRatingInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutRatingInput;
}
