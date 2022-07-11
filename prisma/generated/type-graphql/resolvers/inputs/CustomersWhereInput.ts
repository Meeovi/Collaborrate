import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { Credit_memosListRelationFilter } from "../inputs/Credit_memosListRelationFilter";
import { Customer_groupListRelationFilter } from "../inputs/Customer_groupListRelationFilter";
import { Customer_paymentRelationFilter } from "../inputs/Customer_paymentRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmailsListRelationFilter } from "../inputs/EmailsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediamanagerListRelationFilter } from "../inputs/MediamanagerListRelationFilter";
import { MessagesListRelationFilter } from "../inputs/MessagesListRelationFilter";
import { Newsletter_subscribersListRelationFilter } from "../inputs/Newsletter_subscribersListRelationFilter";
import { OrdersListRelationFilter } from "../inputs/OrdersListRelationFilter";
import { ProjectsListRelationFilter } from "../inputs/ProjectsListRelationFilter";
import { QuotesListRelationFilter } from "../inputs/QuotesListRelationFilter";
import { ReturnsListRelationFilter } from "../inputs/ReturnsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WorkspacesListRelationFilter } from "../inputs/WorkspacesListRelationFilter";

@TypeGraphQL.InputType("CustomersWhereInput", {
  isAbstract: true
})
export class CustomersWhereInput {
  @TypeGraphQL.Field(_type => [CustomersWhereInput], {
    nullable: true
  })
  AND?: CustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersWhereInput], {
    nullable: true
  })
  OR?: CustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersWhereInput], {
    nullable: true
  })
  NOT?: CustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  thumbnail?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name_prefix?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  middle_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customer_group?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  zipcode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name_suffix?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  websites?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  product?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  state?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  customer_since?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  confirmed_email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  date_of_birth?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tax_vat_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  gender?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  short_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address_two?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  payment_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  username?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsListRelationFilter, {
    nullable: true
  })
  comments?: CommentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Credit_memosListRelationFilter, {
    nullable: true
  })
  credit_memos?: Credit_memosListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_groupListRelationFilter, {
    nullable: true
  })
  customer_group_customer_groupTocustomers?: Customer_groupListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentRelationFilter, {
    nullable: true
  })
  customer_payment?: Customer_paymentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EmailsListRelationFilter, {
    nullable: true
  })
  emails?: EmailsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediamanagerListRelationFilter, {
    nullable: true
  })
  mediamanager?: MediamanagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessagesListRelationFilter, {
    nullable: true
  })
  messages?: MessagesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersListRelationFilter, {
    nullable: true
  })
  newsletter_subscribers?: Newsletter_subscribersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersListRelationFilter, {
    nullable: true
  })
  orders?: OrdersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectsListRelationFilter, {
    nullable: true
  })
  projects?: ProjectsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => QuotesListRelationFilter, {
    nullable: true
  })
  quotes?: QuotesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReturnsListRelationFilter, {
    nullable: true
  })
  returns?: ReturnsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspacesListRelationFilter, {
    nullable: true
  })
  workspaces?: WorkspacesListRelationFilter | undefined;
}
