import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoOrderByWithAggregationInput } from "../../../inputs/OotoOrderByWithAggregationInput";
import { OotoScalarWhereWithAggregatesInput } from "../../../inputs/OotoScalarWhereWithAggregatesInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
import { OotoScalarFieldEnum } from "../../../../enums/OotoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOotoArgs {
  @TypeGraphQL.Field(_type => OotoWhereInput, {
    nullable: true
  })
  where?: OotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OotoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OotoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OotoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "login" | "start_date" | "end_date" | "note" | "using_time" | "location">;

  @TypeGraphQL.Field(_type => OotoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OotoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
