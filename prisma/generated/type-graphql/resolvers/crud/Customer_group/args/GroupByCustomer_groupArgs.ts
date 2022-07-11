import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_groupOrderByWithAggregationInput } from "../../../inputs/Customer_groupOrderByWithAggregationInput";
import { Customer_groupScalarWhereWithAggregatesInput } from "../../../inputs/Customer_groupScalarWhereWithAggregatesInput";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";
import { Customer_groupScalarFieldEnum } from "../../../../enums/Customer_groupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_groupArgs {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_groupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "tax_class" | "cust_id">;

  @TypeGraphQL.Field(_type => Customer_groupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_groupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
