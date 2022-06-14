import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsOrderByWithRelationInput } from "../../../inputs/ContractsOrderByWithRelationInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";
import { ContractsScalarFieldEnum } from "../../../../enums/ContractsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstContractsArgs {
  @TypeGraphQL.Field(_type => ContractsWhereInput, {
    nullable: true
  })
  where?: ContractsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContractsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContractsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContractsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContractsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContractsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "contract_title" | "contract_value" | "start_date" | "end_date" | "renewal_reminder" | "customer_signed_date" | "company_signed_date" | "status" | "contract_manager" | "account" | "contact" | "description" | "opportunity" | "contract_type" | "currency" | "line_items" | "total" | "discount" | "subtotal" | "shipping" | "shipping_tax" | "tax" | "grand_total" | "created_at"> | undefined;
}
