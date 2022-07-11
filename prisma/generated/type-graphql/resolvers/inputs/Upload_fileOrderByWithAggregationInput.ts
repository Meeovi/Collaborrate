import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Upload_fileAvgOrderByAggregateInput } from "../inputs/Upload_fileAvgOrderByAggregateInput";
import { Upload_fileCountOrderByAggregateInput } from "../inputs/Upload_fileCountOrderByAggregateInput";
import { Upload_fileMaxOrderByAggregateInput } from "../inputs/Upload_fileMaxOrderByAggregateInput";
import { Upload_fileMinOrderByAggregateInput } from "../inputs/Upload_fileMinOrderByAggregateInput";
import { Upload_fileSumOrderByAggregateInput } from "../inputs/Upload_fileSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Upload_fileOrderByWithAggregationInput", {
  isAbstract: true
})
export class Upload_fileOrderByWithAggregationInput {
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
  alternativeText?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  caption?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  width?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  formats?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ext?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  previewUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider_metadata?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Upload_fileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Upload_fileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_fileAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Upload_fileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_fileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Upload_fileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_fileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Upload_fileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Upload_fileSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Upload_fileSumOrderByAggregateInput | undefined;
}
