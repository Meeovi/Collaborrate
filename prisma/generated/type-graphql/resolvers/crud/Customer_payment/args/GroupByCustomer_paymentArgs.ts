import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentOrderByWithAggregationInput } from "../../../inputs/Customer_paymentOrderByWithAggregationInput";
import { Customer_paymentScalarWhereWithAggregatesInput } from "../../../inputs/Customer_paymentScalarWhereWithAggregatesInput";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";
import { Customer_paymentScalarFieldEnum } from "../../../../enums/Customer_paymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => Customer_paymentWhereInput, {
    nullable: true
  })
  where?: Customer_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_paymentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_paymentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "cust_id" | "payment_info" | "provider" | "account_no" | "expiry">;

  @TypeGraphQL.Field(_type => Customer_paymentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_paymentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
