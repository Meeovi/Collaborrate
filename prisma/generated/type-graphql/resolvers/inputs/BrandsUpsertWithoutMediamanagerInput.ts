import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateWithoutMediamanagerInput } from "../inputs/BrandsCreateWithoutMediamanagerInput";
import { BrandsUpdateWithoutMediamanagerInput } from "../inputs/BrandsUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("BrandsUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class BrandsUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => BrandsUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: BrandsUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => BrandsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: BrandsCreateWithoutMediamanagerInput;
}
