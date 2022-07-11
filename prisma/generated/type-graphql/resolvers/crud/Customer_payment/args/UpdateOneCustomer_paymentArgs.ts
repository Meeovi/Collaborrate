import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentUpdateInput } from "../../../inputs/Customer_paymentUpdateInput";
import { Customer_paymentWhereUniqueInput } from "../../../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentUpdateInput, {
    nullable: false
  })
  data!: Customer_paymentUpdateInput;

  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_paymentWhereUniqueInput;
}
