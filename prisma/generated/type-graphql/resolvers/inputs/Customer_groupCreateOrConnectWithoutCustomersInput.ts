import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateWithoutCustomersInput } from "../inputs/Customer_groupCreateWithoutCustomersInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_groupCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_groupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: Customer_groupCreateWithoutCustomersInput;
}
