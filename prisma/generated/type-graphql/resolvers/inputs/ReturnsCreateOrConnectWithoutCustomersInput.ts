import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateWithoutCustomersInput } from "../inputs/ReturnsCreateWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class ReturnsCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReturnsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: ReturnsCreateWithoutCustomersInput;
}
