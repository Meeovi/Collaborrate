import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateWithoutProductsInput } from "../inputs/BrandsCreateWithoutProductsInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class BrandsCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BrandsCreateWithoutProductsInput, {
    nullable: false
  })
  create!: BrandsCreateWithoutProductsInput;
}
