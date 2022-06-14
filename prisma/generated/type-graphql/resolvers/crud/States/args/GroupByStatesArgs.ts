import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesOrderByWithAggregationInput } from "../../../inputs/StatesOrderByWithAggregationInput";
import { StatesScalarWhereWithAggregatesInput } from "../../../inputs/StatesScalarWhereWithAggregatesInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesScalarFieldEnum } from "../../../../enums/StatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStatesArgs {
  @TypeGraphQL.Field(_type => StatesWhereInput, {
    nullable: true
  })
  where?: StatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "country" | "image">;

  @TypeGraphQL.Field(_type => StatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
