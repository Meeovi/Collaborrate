import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InternalizationOrderByRelevanceFieldEnum } from "../../enums/InternalizationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InternalizationOrderByRelevanceInput", {
  isAbstract: true
})
export class InternalizationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [InternalizationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "region" | "description" | "default" | "website">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
