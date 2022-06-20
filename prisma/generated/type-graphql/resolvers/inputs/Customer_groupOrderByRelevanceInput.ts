import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupOrderByRelevanceFieldEnum } from "../../enums/Customer_groupOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_groupOrderByRelevanceInput", {
  isAbstract: true
})
export class Customer_groupOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_groupOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "tax_class">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
