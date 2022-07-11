import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutMediamanagerInput } from "../inputs/CustomersCreateWithoutMediamanagerInput";
import { CustomersUpdateWithoutMediamanagerInput } from "../inputs/CustomersUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutMediamanagerInput;
}
