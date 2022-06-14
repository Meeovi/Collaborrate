import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsUpdateWithoutCustomersInput } from "../inputs/ReturnsUpdateWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class ReturnsUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReturnsUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: ReturnsUpdateWithoutCustomersInput;
}
