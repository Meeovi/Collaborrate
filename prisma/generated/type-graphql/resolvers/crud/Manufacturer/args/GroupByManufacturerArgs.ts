import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerOrderByWithAggregationInput } from "../../../inputs/ManufacturerOrderByWithAggregationInput";
import { ManufacturerScalarWhereWithAggregatesInput } from "../../../inputs/ManufacturerScalarWhereWithAggregatesInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerScalarFieldEnum } from "../../../../enums/ManufacturerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  where?: ManufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ManufacturerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media">;

  @TypeGraphQL.Field(_type => ManufacturerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ManufacturerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
