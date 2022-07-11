import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SCHEMACountOrderByAggregateInput } from "../inputs/SCHEMACountOrderByAggregateInput";
import { SCHEMAMaxOrderByAggregateInput } from "../inputs/SCHEMAMaxOrderByAggregateInput";
import { SCHEMAMinOrderByAggregateInput } from "../inputs/SCHEMAMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SCHEMAOrderByWithAggregationInput", {
  isAbstract: true
})
export class SCHEMAOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  className?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schema?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isParseClass?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SCHEMACountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SCHEMACountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SCHEMAMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SCHEMAMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SCHEMAMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SCHEMAMinOrderByAggregateInput | undefined;
}
