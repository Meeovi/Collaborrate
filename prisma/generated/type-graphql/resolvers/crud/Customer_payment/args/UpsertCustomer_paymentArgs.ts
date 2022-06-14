import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentCreateInput } from "../../../inputs/Customer_paymentCreateInput";
import { Customer_paymentUpdateInput } from "../../../inputs/Customer_paymentUpdateInput";
import { Customer_paymentWhereUniqueInput } from "../../../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_paymentCreateInput, {
    nullable: false
  })
  create!: Customer_paymentCreateInput;

  @TypeGraphQL.Field(_type => Customer_paymentUpdateInput, {
    nullable: false
  })
  update!: Customer_paymentUpdateInput;
}
