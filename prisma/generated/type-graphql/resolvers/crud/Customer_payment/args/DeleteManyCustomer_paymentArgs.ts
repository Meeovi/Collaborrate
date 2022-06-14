import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentWhereInput, {
    nullable: true
  })
  where?: Customer_paymentWhereInput | undefined;
}
