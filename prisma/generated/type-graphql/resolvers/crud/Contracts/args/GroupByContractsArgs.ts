import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsOrderByWithAggregationInput } from "../../../inputs/ContractsOrderByWithAggregationInput";
import { ContractsScalarWhereWithAggregatesInput } from "../../../inputs/ContractsScalarWhereWithAggregatesInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
import { ContractsScalarFieldEnum } from "../../../../enums/ContractsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContractsArgs {
  @TypeGraphQL.Field(_type => ContractsWhereInput, {
    nullable: true
  })
  where?: ContractsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContractsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContractsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContractsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "contract_title" | "contract_value" | "start_date" | "end_date" | "renewal_reminder" | "customer_signed_date" | "company_signed_date" | "status" | "contract_manager" | "account" | "contact" | "description" | "opportunity" | "contract_type" | "currency" | "line_items" | "total" | "discount" | "subtotal" | "shipping" | "shipping_tax" | "tax" | "grand_total" | "created_at">;

  @TypeGraphQL.Field(_type => ContractsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContractsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
