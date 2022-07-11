import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlossaryAvgOrderByAggregateInput } from "../inputs/GlossaryAvgOrderByAggregateInput";
import { GlossaryCountOrderByAggregateInput } from "../inputs/GlossaryCountOrderByAggregateInput";
import { GlossaryMaxOrderByAggregateInput } from "../inputs/GlossaryMaxOrderByAggregateInput";
import { GlossaryMinOrderByAggregateInput } from "../inputs/GlossaryMinOrderByAggregateInput";
import { GlossarySumOrderByAggregateInput } from "../inputs/GlossarySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GlossaryOrderByWithAggregationInput", {
  isAbstract: true
})
export class GlossaryOrderByWithAggregationInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GlossaryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GlossaryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GlossaryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GlossaryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GlossaryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GlossaryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GlossaryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GlossaryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GlossarySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GlossarySumOrderByAggregateInput | undefined;
}
