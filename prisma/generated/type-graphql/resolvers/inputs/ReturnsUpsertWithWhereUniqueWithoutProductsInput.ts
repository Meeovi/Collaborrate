import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateWithoutProductsInput } from "../inputs/ReturnsCreateWithoutProductsInput";
import { ReturnsUpdateWithoutProductsInput } from "../inputs/ReturnsUpdateWithoutProductsInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class ReturnsUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReturnsUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: ReturnsUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => ReturnsCreateWithoutProductsInput, {
    nullable: false
  })
  create!: ReturnsCreateWithoutProductsInput;
}
