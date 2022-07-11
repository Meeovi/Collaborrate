import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsUpdateWithoutProductsInput } from "../inputs/BrandsUpdateWithoutProductsInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class BrandsUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BrandsUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: BrandsUpdateWithoutProductsInput;
}
