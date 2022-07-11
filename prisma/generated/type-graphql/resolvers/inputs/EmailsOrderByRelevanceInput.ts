import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsOrderByRelevanceFieldEnum } from "../../enums/EmailsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmailsOrderByRelevanceInput", {
  isAbstract: true
})
export class EmailsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [EmailsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"subject" | "content" | "bcc" | "cc" | "from" | "media">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
