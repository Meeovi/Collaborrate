import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsUpdateWithoutProductsInput } from "../inputs/ReturnsUpdateWithoutProductsInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class ReturnsUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReturnsUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: ReturnsUpdateWithoutProductsInput;
}
