import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsOrderByWithAggregationInput } from "../../../inputs/SegmentsOrderByWithAggregationInput";
import { SegmentsScalarWhereWithAggregatesInput } from "../../../inputs/SegmentsScalarWhereWithAggregatesInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";
import { SegmentsScalarFieldEnum } from "../../../../enums/SegmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsWhereInput, {
    nullable: true
  })
  where?: SegmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SegmentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SegmentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SegmentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "description" | "website" | "status" | "apply_to" | "customers">;

  @TypeGraphQL.Field(_type => SegmentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SegmentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
