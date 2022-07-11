import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsOrderByWithAggregationInput } from "../../../inputs/FullfillmentsOrderByWithAggregationInput";
import { FullfillmentsScalarWhereWithAggregatesInput } from "../../../inputs/FullfillmentsScalarWhereWithAggregatesInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";
import { FullfillmentsScalarFieldEnum } from "../../../../enums/FullfillmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsWhereInput, {
    nullable: true
  })
  where?: FullfillmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FullfillmentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FullfillmentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FullfillmentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "shipping_zones" | "company" | "address" | "address_two" | "city" | "state" | "zipcode" | "country" | "country_area" | "phone" | "pickup" | "stock">;

  @TypeGraphQL.Field(_type => FullfillmentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FullfillmentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
