import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BrandsOrderByWithAggregationInput } from "../../../inputs/BrandsOrderByWithAggregationInput";
import { BrandsScalarWhereWithAggregatesInput } from "../../../inputs/BrandsScalarWhereWithAggregatesInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
import { BrandsScalarFieldEnum } from "../../../../enums/BrandsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBrandsArgs {
  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  where?: BrandsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BrandsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BrandsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media">;

  @TypeGraphQL.Field(_type => BrandsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BrandsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
