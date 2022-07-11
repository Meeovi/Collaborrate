import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateOrConnectWithoutMediamanagerInput } from "../inputs/BrandsCreateOrConnectWithoutMediamanagerInput";
import { BrandsCreateWithoutMediamanagerInput } from "../inputs/BrandsCreateWithoutMediamanagerInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class BrandsCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => BrandsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: BrandsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: BrandsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: true
  })
  connect?: BrandsWhereUniqueInput | undefined;
}
