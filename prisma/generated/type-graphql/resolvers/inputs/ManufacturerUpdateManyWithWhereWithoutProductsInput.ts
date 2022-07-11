import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerScalarWhereInput } from "../inputs/ManufacturerScalarWhereInput";
import { ManufacturerUpdateManyMutationInput } from "../inputs/ManufacturerUpdateManyMutationInput";

@TypeGraphQL.InputType("ManufacturerUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class ManufacturerUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => ManufacturerScalarWhereInput, {
    nullable: false
  })
  where!: ManufacturerScalarWhereInput;

  @TypeGraphQL.Field(_type => ManufacturerUpdateManyMutationInput, {
    nullable: false
  })
  data!: ManufacturerUpdateManyMutationInput;
}
