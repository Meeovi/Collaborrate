import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { SurveysOrderByRelevanceFieldEnum } from "../../enums/SurveysOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("SurveysOrderByRelevanceInput", {
  isAbstract: true
})
export class SurveysOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SurveysOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "assigned_to" | "status" | "description" | "question" | "answer" | "submit_text" | "satisfied_text" | "neither_text" | "dissatisfied_text">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
