import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnersOrderByRelevanceFieldEnum } from "../../enums/PartnersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PartnersOrderByRelevanceInput", {
  isAbstract: true
})
export class PartnersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PartnersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "address" | "city" | "state" | "country" | "isPublic" | "business_type">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
