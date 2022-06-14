import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOrderByRelationAggregateInput } from "../inputs/CommentsOrderByRelationAggregateInput";
import { Credit_memosOrderByRelationAggregateInput } from "../inputs/Credit_memosOrderByRelationAggregateInput";
import { Customer_groupOrderByRelationAggregateInput } from "../inputs/Customer_groupOrderByRelationAggregateInput";
import { Customer_paymentOrderByWithRelationInput } from "../inputs/Customer_paymentOrderByWithRelationInput";
import { EmailsOrderByRelationAggregateInput } from "../inputs/EmailsOrderByRelationAggregateInput";
import { MediamanagerOrderByRelationAggregateInput } from "../inputs/MediamanagerOrderByRelationAggregateInput";
import { MessagesOrderByRelationAggregateInput } from "../inputs/MessagesOrderByRelationAggregateInput";
import { Newsletter_subscribersOrderByRelationAggregateInput } from "../inputs/Newsletter_subscribersOrderByRelationAggregateInput";
import { OrdersOrderByRelationAggregateInput } from "../inputs/OrdersOrderByRelationAggregateInput";
import { ProjectsOrderByRelationAggregateInput } from "../inputs/ProjectsOrderByRelationAggregateInput";
import { QuotesOrderByRelationAggregateInput } from "../inputs/QuotesOrderByRelationAggregateInput";
import { ReturnsOrderByRelationAggregateInput } from "../inputs/ReturnsOrderByRelationAggregateInput";
import { WorkspacesOrderByRelationAggregateInput } from "../inputs/WorkspacesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomersOrderByWithRelationInput", {
  isAbstract: true
})
export class CustomersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name_prefix?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  middle_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_group?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zipcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name_suffix?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websites?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_since?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  confirmed_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_of_birth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_vat_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  short_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_two?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentsOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: CommentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosOrderByRelationAggregateInput, {
    nullable: true
  })
  credit_memos?: Credit_memosOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_group_customer_groupTocustomers?: Customer_groupOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentOrderByWithRelationInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EmailsOrderByRelationAggregateInput, {
    nullable: true
  })
  emails?: EmailsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelationAggregateInput, {
    nullable: true
  })
  mediamanager?: MediamanagerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessagesOrderByRelationAggregateInput, {
    nullable: true
  })
  messages?: MessagesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersOrderByRelationAggregateInput, {
    nullable: true
  })
  newsletter_subscribers?: Newsletter_subscribersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersOrderByRelationAggregateInput, {
    nullable: true
  })
  orders?: OrdersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => QuotesOrderByRelationAggregateInput, {
    nullable: true
  })
  quotes?: QuotesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsOrderByRelationAggregateInput, {
    nullable: true
  })
  returns?: ReturnsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesOrderByRelationAggregateInput, {
    nullable: true
  })
  workspaces?: WorkspacesOrderByRelationAggregateInput | undefined;
}
