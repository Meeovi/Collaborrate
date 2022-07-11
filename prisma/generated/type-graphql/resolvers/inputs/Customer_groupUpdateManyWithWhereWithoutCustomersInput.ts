import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupScalarWhereInput } from "../inputs/Customer_groupScalarWhereInput";
import { Customer_groupUpdateManyMutationInput } from "../inputs/Customer_groupUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_groupUpdateManyWithWhereWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_groupUpdateManyWithWhereWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Customer_groupScalarWhereInput, {
    nullable: false
  })
  where!: Customer_groupScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_groupUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_groupUpdateManyMutationInput;
}
