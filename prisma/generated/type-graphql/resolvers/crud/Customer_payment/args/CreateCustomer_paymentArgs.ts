import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentCreateInput } from "../../../inputs/Customer_paymentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentCreateInput, {
    nullable: false
  })
  data!: Customer_paymentCreateInput;
}
