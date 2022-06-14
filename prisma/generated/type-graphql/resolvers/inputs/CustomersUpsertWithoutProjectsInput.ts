import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutProjectsInput } from "../inputs/CustomersCreateWithoutProjectsInput";
import { CustomersUpdateWithoutProjectsInput } from "../inputs/CustomersUpdateWithoutProjectsInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutProjectsInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutProjectsInput;
}
