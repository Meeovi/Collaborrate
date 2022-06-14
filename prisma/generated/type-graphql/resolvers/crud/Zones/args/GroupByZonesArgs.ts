import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesOrderByWithAggregationInput } from "../../../inputs/ZonesOrderByWithAggregationInput";
import { ZonesScalarWhereWithAggregatesInput } from "../../../inputs/ZonesScalarWhereWithAggregatesInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
import { ZonesScalarFieldEnum } from "../../../../enums/ZonesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByZonesArgs {
  @TypeGraphQL.Field(_type => ZonesWhereInput, {
    nullable: true
  })
  where?: ZonesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ZonesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ZonesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZonesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "updated_at" | "scope" | "type" | "country" | "code">;

  @TypeGraphQL.Field(_type => ZonesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ZonesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
