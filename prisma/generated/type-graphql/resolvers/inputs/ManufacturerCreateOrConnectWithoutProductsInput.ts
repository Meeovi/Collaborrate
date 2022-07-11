import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerCreateWithoutProductsInput } from "../inputs/ManufacturerCreateWithoutProductsInput";
import { ManufacturerWhereUniqueInput } from "../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.InputType("ManufacturerCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class ManufacturerCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: ManufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManufacturerCreateWithoutProductsInput, {
    nullable: false
  })
  create!: ManufacturerCreateWithoutProductsInput;
}
