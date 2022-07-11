import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceOrderByWithAggregationInput } from "../../../inputs/SourceOrderByWithAggregationInput";
import { SourceScalarWhereWithAggregatesInput } from "../../../inputs/SourceScalarWhereWithAggregatesInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
import { SourceScalarFieldEnum } from "../../../../enums/SourceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySourceArgs {
  @TypeGraphQL.Field(_type => SourceWhereInput, {
    nullable: true
  })
  where?: SourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SourceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SourceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SourceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "code" | "enabled" | "description" | "latitude" | "longitude" | "pickup_location" | "contact_name" | "email" | "phone" | "fax" | "country" | "state" | "city" | "street" | "postcode">;

  @TypeGraphQL.Field(_type => SourceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SourceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
