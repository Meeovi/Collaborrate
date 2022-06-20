import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesOrderByRelevanceFieldEnum } from "../../enums/CountriesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CountriesOrderByRelevanceInput", {
  isAbstract: true
})
export class CountriesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CountriesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "description" | "image" | "region">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
