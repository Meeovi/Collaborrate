import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutMediamanagerInput } from "../inputs/CustomersCreateWithoutMediamanagerInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutMediamanagerInput;
}
