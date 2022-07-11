import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TargetsOrderByRelevanceFieldEnum } from "../../enums/TargetsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TargetsOrderByRelevanceInput", {
  isAbstract: true
})
export class TargetsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TargetsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "customer_name" | "email_opt_out" | "donotcall">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
