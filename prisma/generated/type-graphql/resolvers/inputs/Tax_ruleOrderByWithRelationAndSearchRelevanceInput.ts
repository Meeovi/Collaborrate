import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { Tax_ruleOrderByRelevanceInput } from "../inputs/Tax_ruleOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Tax_ruleOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Tax_ruleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  products?: ProductsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Tax_ruleOrderByRelevanceInput | undefined;
}
