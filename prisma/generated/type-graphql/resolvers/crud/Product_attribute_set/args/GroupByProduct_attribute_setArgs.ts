import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setOrderByWithAggregationInput } from "../../../inputs/Product_attribute_setOrderByWithAggregationInput";
import { Product_attribute_setScalarWhereWithAggregatesInput } from "../../../inputs/Product_attribute_setScalarWhereWithAggregatesInput";
import { Product_attribute_setWhereInput } from "../../../inputs/Product_attribute_setWhereInput";
import { Product_attribute_setScalarFieldEnum } from "../../../../enums/Product_attribute_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => Product_attribute_setWhereInput, {
    nullable: true
  })
  where?: Product_attribute_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_attribute_setOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "based_on" | "attribute_id">;

  @TypeGraphQL.Field(_type => Product_attribute_setScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_attribute_setScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
