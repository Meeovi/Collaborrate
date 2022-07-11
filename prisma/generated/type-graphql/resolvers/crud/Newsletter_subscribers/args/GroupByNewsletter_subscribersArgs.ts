import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersOrderByWithAggregationInput } from "../../../inputs/Newsletter_subscribersOrderByWithAggregationInput";
import { Newsletter_subscribersScalarWhereWithAggregatesInput } from "../../../inputs/Newsletter_subscribersScalarWhereWithAggregatesInput";
import { Newsletter_subscribersWhereInput } from "../../../inputs/Newsletter_subscribersWhereInput";
import { Newsletter_subscribersScalarFieldEnum } from "../../../../enums/Newsletter_subscribersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput, {
    nullable: true
  })
  where?: Newsletter_subscribersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Newsletter_subscribersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id">;

  @TypeGraphQL.Field(_type => Newsletter_subscribersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Newsletter_subscribersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
