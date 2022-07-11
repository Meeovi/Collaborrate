import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateWithoutMediamanagerInput } from "../inputs/BrandsCreateWithoutMediamanagerInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class BrandsCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BrandsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: BrandsCreateWithoutMediamanagerInput;
}
