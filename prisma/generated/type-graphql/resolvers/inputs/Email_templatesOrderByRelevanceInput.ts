import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Email_templatesOrderByRelevanceFieldEnum } from "../../enums/Email_templatesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Email_templatesOrderByRelevanceInput", {
  isAbstract: true
})
export class Email_templatesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Email_templatesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "assigned_to" | "type" | "active" | "insert_variable" | "subject" | "content" | "header" | "footer" | "width" | "height" | "media">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
