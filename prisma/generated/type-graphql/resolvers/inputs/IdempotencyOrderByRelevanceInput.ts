import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IdempotencyOrderByRelevanceFieldEnum } from "../../enums/IdempotencyOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IdempotencyOrderByRelevanceInput", {
  isAbstract: true
})
export class IdempotencyOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [IdempotencyOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"objectId" | "reqId" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
