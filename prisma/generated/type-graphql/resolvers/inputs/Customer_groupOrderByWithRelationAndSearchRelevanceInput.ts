import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupOrderByRelevanceInput } from "../inputs/Customer_groupOrderByRelevanceInput";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_groupOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Customer_groupOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customers?: CustomersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Customer_groupOrderByRelevanceInput | undefined;
}
