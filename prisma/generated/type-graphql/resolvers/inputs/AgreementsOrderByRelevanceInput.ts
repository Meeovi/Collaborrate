import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsOrderByRelevanceFieldEnum } from "../../enums/AgreementsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AgreementsOrderByRelevanceInput", {
  isAbstract: true
})
export class AgreementsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [AgreementsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"content" | "name" | "image" | "excerpt" | "type">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
