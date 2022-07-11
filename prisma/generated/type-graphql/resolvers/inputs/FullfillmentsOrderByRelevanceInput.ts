import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FullfillmentsOrderByRelevanceFieldEnum } from "../../enums/FullfillmentsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FullfillmentsOrderByRelevanceInput", {
  isAbstract: true
})
export class FullfillmentsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [FullfillmentsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "shipping_zones" | "company" | "address" | "address_two" | "city" | "state" | "zipcode" | "country" | "country_area" | "phone" | "pickup" | "stock">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
