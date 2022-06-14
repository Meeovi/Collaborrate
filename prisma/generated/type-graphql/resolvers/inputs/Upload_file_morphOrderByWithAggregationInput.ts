import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Upload_file_morphAvgOrderByAggregateInput } from "../inputs/Upload_file_morphAvgOrderByAggregateInput";
import { Upload_file_morphCountOrderByAggregateInput } from "../inputs/Upload_file_morphCountOrderByAggregateInput";
import { Upload_file_morphMaxOrderByAggregateInput } from "../inputs/Upload_file_morphMaxOrderByAggregateInput";
import { Upload_file_morphMinOrderByAggregateInput } from "../inputs/Upload_file_morphMinOrderByAggregateInput";
import { Upload_file_morphSumOrderByAggregateInput } from "../inputs/Upload_file_morphSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Upload_file_morphOrderByWithAggregationInput", {
  isAbstract: true
})
export class Upload_file_morphOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  upload_file_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  related_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  related_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  field?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Upload_file_morphCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Upload_file_morphAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Upload_file_morphMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Upload_file_morphMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_file_morphSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Upload_file_morphSumOrderByAggregateInput | undefined;
}
