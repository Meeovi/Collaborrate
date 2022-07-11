import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupUpdateWithoutCustomersInput } from "../inputs/Customer_groupUpdateWithoutCustomersInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_groupUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_groupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: Customer_groupUpdateWithoutCustomersInput;
}
