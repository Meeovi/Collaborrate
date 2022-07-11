import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosOrderByRelevanceFieldEnum } from "../../enums/Credit_memosOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Credit_memosOrderByRelevanceInput", {
  isAbstract: true
})
export class Credit_memosOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Credit_memosOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"credit_memo" | "bill_to_name" | "status" | "refunded" | "action">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
