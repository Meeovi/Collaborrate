import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseOrderByWithAggregationInput } from "../../../inputs/WarehouseOrderByWithAggregationInput";
import { WarehouseScalarWhereWithAggregatesInput } from "../../../inputs/WarehouseScalarWhereWithAggregatesInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
import { WarehouseScalarFieldEnum } from "../../../../enums/WarehouseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseWhereInput, {
    nullable: true
  })
  where?: WarehouseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WarehouseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WarehouseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WarehouseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "description" | "city" | "state" | "country" | "postal" | "status" | "image" | "products" | "category" | "isPublic">;

  @TypeGraphQL.Field(_type => WarehouseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WarehouseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
