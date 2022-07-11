import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { StatesOrderByRelevanceFieldEnum } from "../../enums/StatesOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("StatesOrderByRelevanceInput", {
  isAbstract: true
})
export class StatesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [StatesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "country" | "image">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
