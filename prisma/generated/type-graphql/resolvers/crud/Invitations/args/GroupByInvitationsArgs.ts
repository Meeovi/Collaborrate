import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsOrderByWithAggregationInput } from "../../../inputs/InvitationsOrderByWithAggregationInput";
import { InvitationsScalarWhereWithAggregatesInput } from "../../../inputs/InvitationsScalarWhereWithAggregatesInput";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";
import { InvitationsScalarFieldEnum } from "../../../../enums/InvitationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsWhereInput, {
    nullable: true
  })
  where?: InvitationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvitationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InvitationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvitationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "invoiceDate" | "email" | "billingAddress" | "shippingAddress" | "orderNumber" | "grandTotalPurchased" | "paymentMethod" | "status" | "media" | "content">;

  @TypeGraphQL.Field(_type => InvitationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InvitationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
