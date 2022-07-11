import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateWithoutNewsletter_subscribersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutNewsletter_subscribersInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutNewsletter_subscribersInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutNewsletter_subscribersInput;
}
