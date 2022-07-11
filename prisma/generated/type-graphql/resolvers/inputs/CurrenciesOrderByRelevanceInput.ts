import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrenciesOrderByRelevanceFieldEnum } from "../../enums/CurrenciesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurrenciesOrderByRelevanceInput", {
  isAbstract: true
})
export class CurrenciesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CurrenciesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"code" | "name" | "region">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
