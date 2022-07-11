import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/InvitationsOrderByWithRelationAndSearchRelevanceInput";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";
import { InvitationsWhereUniqueInput } from "../../../inputs/InvitationsWhereUniqueInput";
import { InvitationsScalarFieldEnum } from "../../../../enums/InvitationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsWhereInput, {
    nullable: true
  })
  where?: InvitationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvitationsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: InvitationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => InvitationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: InvitationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InvitationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "invoiceDate" | "email" | "billingAddress" | "shippingAddress" | "orderNumber" | "grandTotalPurchased" | "paymentMethod" | "status" | "media" | "content"> | undefined;
}
