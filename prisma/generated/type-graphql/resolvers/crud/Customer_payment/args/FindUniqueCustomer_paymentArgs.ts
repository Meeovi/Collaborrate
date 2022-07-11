import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentWhereUniqueInput } from "../../../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_paymentWhereUniqueInput;
}
