import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsScalarWhereInput } from "../inputs/ReturnsScalarWhereInput";
import { ReturnsUpdateManyMutationInput } from "../inputs/ReturnsUpdateManyMutationInput";

@TypeGraphQL.InputType("ReturnsUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class ReturnsUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => ReturnsScalarWhereInput, {
    nullable: false
  })
  where!: ReturnsScalarWhereInput;

  @TypeGraphQL.Field(_type => ReturnsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReturnsUpdateManyMutationInput;
}
