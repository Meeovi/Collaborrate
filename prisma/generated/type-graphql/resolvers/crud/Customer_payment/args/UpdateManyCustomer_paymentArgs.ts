import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentUpdateManyMutationInput } from "../../../inputs/Customer_paymentUpdateManyMutationInput";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_paymentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_paymentWhereInput, {
    nullable: true
  })
  where?: Customer_paymentWhereInput | undefined;
}
