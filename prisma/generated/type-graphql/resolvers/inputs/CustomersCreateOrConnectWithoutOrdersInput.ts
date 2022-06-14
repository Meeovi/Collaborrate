import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutOrdersInput } from "../inputs/CustomersCreateWithoutOrdersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutOrdersInput;
}
