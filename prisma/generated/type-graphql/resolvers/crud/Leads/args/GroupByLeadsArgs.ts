import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsOrderByWithAggregationInput } from "../../../inputs/LeadsOrderByWithAggregationInput";
import { LeadsScalarWhereWithAggregatesInput } from "../../../inputs/LeadsScalarWhereWithAggregatesInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
import { LeadsScalarFieldEnum } from "../../../../enums/LeadsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereInput, {
    nullable: true
  })
  where?: LeadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LeadsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LeadsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LeadsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "status" | "status_description" | "opportunity_amount" | "campaign" | "lead_source" | "lead_source_description" | "referred_by" | "customer_name">;

  @TypeGraphQL.Field(_type => LeadsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LeadsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
