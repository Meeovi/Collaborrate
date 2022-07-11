import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerUpdateWithoutProductsInput } from "../inputs/ManufacturerUpdateWithoutProductsInput";
import { ManufacturerWhereUniqueInput } from "../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.InputType("ManufacturerUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class ManufacturerUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: ManufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManufacturerUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: ManufacturerUpdateWithoutProductsInput;
}
