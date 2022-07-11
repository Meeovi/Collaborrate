import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsOrderByWithAggregationInput } from "../../../inputs/TargetsOrderByWithAggregationInput";
import { TargetsScalarWhereWithAggregatesInput } from "../../../inputs/TargetsScalarWhereWithAggregatesInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsScalarFieldEnum } from "../../../../enums/TargetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereInput, {
    nullable: true
  })
  where?: TargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TargetsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TargetsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TargetsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "customer_name" | "email_opt_out" | "donotcall">;

  @TypeGraphQL.Field(_type => TargetsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TargetsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
