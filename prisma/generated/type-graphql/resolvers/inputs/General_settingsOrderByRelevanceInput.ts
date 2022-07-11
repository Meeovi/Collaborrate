import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { General_settingsOrderByRelevanceFieldEnum } from "../../enums/General_settingsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("General_settingsOrderByRelevanceInput", {
  isAbstract: true
})
export class General_settingsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [General_settingsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"title" | "tagline" | "url" | "email" | "access_restrictions" | "restriction_mode" | "startup_page" | "landing_page" | "http_response" | "store_email" | "store_contact" | "store_contact_two" | "customer_support">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
