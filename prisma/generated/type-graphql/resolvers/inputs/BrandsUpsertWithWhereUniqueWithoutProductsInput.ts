import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateWithoutProductsInput } from "../inputs/BrandsCreateWithoutProductsInput";
import { BrandsUpdateWithoutProductsInput } from "../inputs/BrandsUpdateWithoutProductsInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class BrandsUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BrandsUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: BrandsUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => BrandsCreateWithoutProductsInput, {
    nullable: false
  })
  create!: BrandsCreateWithoutProductsInput;
}
