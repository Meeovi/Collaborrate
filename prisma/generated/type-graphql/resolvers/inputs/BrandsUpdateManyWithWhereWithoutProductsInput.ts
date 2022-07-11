import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsScalarWhereInput } from "../inputs/BrandsScalarWhereInput";
import { BrandsUpdateManyMutationInput } from "../inputs/BrandsUpdateManyMutationInput";

@TypeGraphQL.InputType("BrandsUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class BrandsUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => BrandsScalarWhereInput, {
    nullable: false
  })
  where!: BrandsScalarWhereInput;

  @TypeGraphQL.Field(_type => BrandsUpdateManyMutationInput, {
    nullable: false
  })
  data!: BrandsUpdateManyMutationInput;
}
