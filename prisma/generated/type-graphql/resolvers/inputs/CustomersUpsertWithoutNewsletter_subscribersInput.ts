import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateWithoutNewsletter_subscribersInput";
import { CustomersUpdateWithoutNewsletter_subscribersInput } from "../inputs/CustomersUpdateWithoutNewsletter_subscribersInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutNewsletter_subscribersInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutNewsletter_subscribersInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutNewsletter_subscribersInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutNewsletter_subscribersInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutNewsletter_subscribersInput;
}
