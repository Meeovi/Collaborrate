import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerCreateWithoutProductsInput } from "../inputs/ManufacturerCreateWithoutProductsInput";
import { ManufacturerUpdateWithoutProductsInput } from "../inputs/ManufacturerUpdateWithoutProductsInput";
import { ManufacturerWhereUniqueInput } from "../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.InputType("ManufacturerUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class ManufacturerUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: ManufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManufacturerUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: ManufacturerUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => ManufacturerCreateWithoutProductsInput, {
    nullable: false
  })
  create!: ManufacturerCreateWithoutProductsInput;
}
