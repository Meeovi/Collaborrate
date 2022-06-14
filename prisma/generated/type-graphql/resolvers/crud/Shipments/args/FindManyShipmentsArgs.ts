import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsOrderByWithRelationInput } from "../../../inputs/ShipmentsOrderByWithRelationInput";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";
import { ShipmentsScalarFieldEnum } from "../../../../enums/ShipmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsWhereInput, {
    nullable: true
  })
  where?: ShipmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShipmentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShipmentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShipmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ShipmentsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product" | "speed_grade" | "ship_date" | "carrier_name" | "transit_time" | "tracking_url" | "image" | "id" | "client_id" | "client_secret" | "country" | "website"> | undefined;
}
