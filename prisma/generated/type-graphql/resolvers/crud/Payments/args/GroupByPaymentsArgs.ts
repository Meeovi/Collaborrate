import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsOrderByWithAggregationInput } from "../../../inputs/PaymentsOrderByWithAggregationInput";
import { PaymentsScalarWhereWithAggregatesInput } from "../../../inputs/PaymentsScalarWhereWithAggregatesInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
import { PaymentsScalarFieldEnum } from "../../../../enums/PaymentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsWhereInput, {
    nullable: true
  })
  where?: PaymentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PaymentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PaymentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active" | "country">;

  @TypeGraphQL.Field(_type => PaymentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PaymentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
