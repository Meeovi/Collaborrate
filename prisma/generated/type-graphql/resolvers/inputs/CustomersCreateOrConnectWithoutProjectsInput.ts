import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutProjectsInput } from "../inputs/CustomersCreateWithoutProjectsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutProjectsInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutProjectsInput;
}
