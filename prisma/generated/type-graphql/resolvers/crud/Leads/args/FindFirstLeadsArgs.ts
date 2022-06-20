import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LeadsOrderByWithRelationAndSearchRelevanceInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";
import { LeadsScalarFieldEnum } from "../../../../enums/LeadsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereInput, {
    nullable: true
  })
  where?: LeadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LeadsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: LeadsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => LeadsWhereUniqueInput, {
    nullable: true
  })
  cursor?: LeadsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LeadsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "status" | "status_description" | "opportunity_amount" | "campaign" | "lead_source" | "lead_source_description" | "referred_by" | "customer_name"> | undefined;
}
