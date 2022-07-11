import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TargetsOrderByWithRelationAndSearchRelevanceInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";
import { TargetsScalarFieldEnum } from "../../../../enums/TargetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereInput, {
    nullable: true
  })
  where?: TargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TargetsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TargetsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TargetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TargetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TargetsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "customer_name" | "email_opt_out" | "donotcall"> | undefined;
}
