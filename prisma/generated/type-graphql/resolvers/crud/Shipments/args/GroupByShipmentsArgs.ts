import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsOrderByWithAggregationInput } from "../../../inputs/ShipmentsOrderByWithAggregationInput";
import { ShipmentsScalarWhereWithAggregatesInput } from "../../../inputs/ShipmentsScalarWhereWithAggregatesInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsScalarFieldEnum } from "../../../../enums/ShipmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsWhereInput, {
    nullable: true
  })
  where?: ShipmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShipmentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShipmentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShipmentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product" | "speed_grade" | "ship_date" | "carrier_name" | "transit_time" | "tracking_url" | "image" | "id" | "client_id" | "client_secret" | "country" | "website">;

  @TypeGraphQL.Field(_type => ShipmentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShipmentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
