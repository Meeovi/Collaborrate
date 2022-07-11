import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomizationsOrderByRelevanceFieldEnum } from "../../enums/CustomizationsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomizationsOrderByRelevanceInput", {
  isAbstract: true
})
export class CustomizationsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CustomizationsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"site_name" | "nav_link" | "notification" | "banner" | "footer_link" | "announcement" | "email" | "site_url" | "allow_signup">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
