import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeOrderByWithAggregationInput } from "../../../inputs/Core_storeOrderByWithAggregationInput";
import { Core_storeScalarWhereWithAggregatesInput } from "../../../inputs/Core_storeScalarWhereWithAggregatesInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";
import { Core_storeScalarFieldEnum } from "../../../../enums/Core_storeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeWhereInput, {
    nullable: true
  })
  where?: Core_storeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Core_storeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Core_storeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Core_storeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "key" | "value" | "type" | "environment" | "tag">;

  @TypeGraphQL.Field(_type => Core_storeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Core_storeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
