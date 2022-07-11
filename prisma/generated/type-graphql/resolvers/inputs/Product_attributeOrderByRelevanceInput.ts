import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeOrderByRelevanceFieldEnum } from "../../enums/Product_attributeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_attributeOrderByRelevanceInput", {
  isAbstract: true
})
export class Product_attributeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_attributeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"default_label" | "attribute_code" | "filter_options" | "use_search" | "position" | "attribute_class" | "attribute_value" | "column_options" | "isPublic" | "meta_description" | "meta_url">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
