import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersOrderByRelevanceFieldEnum } from "../../enums/Newsletter_subscribersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Newsletter_subscribersOrderByRelevanceInput", {
  isAbstract: true
})
export class Newsletter_subscribersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
