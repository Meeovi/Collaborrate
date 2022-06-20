import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesOrderByRelevanceFieldEnum } from "../../enums/Product_typesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_typesOrderByRelevanceInput", {
  isAbstract: true
})
export class Product_typesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_typesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type_name" | "taxes" | "isShippable" | "meta_url" | "meta_description" | "filter_options" | "product_type">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
