import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosOrderByWithAggregationInput } from "../../../inputs/Credit_memosOrderByWithAggregationInput";
import { Credit_memosScalarWhereWithAggregatesInput } from "../../../inputs/Credit_memosScalarWhereWithAggregatesInput";
import { Credit_memosWhereInput } from "../../../inputs/Credit_memosWhereInput";
import { Credit_memosScalarFieldEnum } from "../../../../enums/Credit_memosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  where?: Credit_memosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Credit_memosOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"credit_memo" | "order_number" | "created" | "bill_to_name" | "status" | "refunded" | "action" | "id" | "cust_id" | "prod_id">;

  @TypeGraphQL.Field(_type => Credit_memosScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Credit_memosScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
