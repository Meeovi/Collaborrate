import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EndofshiftOrderByRelevanceFieldEnum } from "../../enums/EndofshiftOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EndofshiftOrderByRelevanceInput", {
  isAbstract: true
})
export class EndofshiftOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [EndofshiftOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"content" | "login" | "mcms" | "next_shift" | "projects" | "tickets" | "whid">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
