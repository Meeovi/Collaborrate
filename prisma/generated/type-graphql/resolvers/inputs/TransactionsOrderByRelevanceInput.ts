import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TransactionsOrderByRelevanceFieldEnum } from "../../enums/TransactionsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TransactionsOrderByRelevanceInput", {
  isAbstract: true
})
export class TransactionsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TransactionsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "closed"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
