import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateWithoutCustomersInput } from "../inputs/ReturnsCreateWithoutCustomersInput";
import { ReturnsUpdateWithoutCustomersInput } from "../inputs/ReturnsUpdateWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class ReturnsUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReturnsUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: ReturnsUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => ReturnsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: ReturnsCreateWithoutCustomersInput;
}
