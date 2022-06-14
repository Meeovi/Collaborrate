import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCredit_memosInput } from "../inputs/CustomersCreateWithoutCredit_memosInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCredit_memosInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutCredit_memosInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCredit_memosInput;
}
