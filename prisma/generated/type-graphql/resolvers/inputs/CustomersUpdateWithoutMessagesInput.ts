import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateManyWithoutCustomersInput } from "../inputs/CommentsUpdateManyWithoutCustomersInput";
import { Credit_memosUpdateManyWithoutCustomersInput } from "../inputs/Credit_memosUpdateManyWithoutCustomersInput";
import { Customer_groupUpdateManyWithoutCustomersInput } from "../inputs/Customer_groupUpdateManyWithoutCustomersInput";
import { Customer_paymentUpdateOneWithoutCustomersInput } from "../inputs/Customer_paymentUpdateOneWithoutCustomersInput";
import { EmailsUpdateManyWithoutCustomersInput } from "../inputs/EmailsUpdateManyWithoutCustomersInput";
import { MediamanagerUpdateManyWithoutCustomersInput } from "../inputs/MediamanagerUpdateManyWithoutCustomersInput";
import { Newsletter_subscribersUpdateManyWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateManyWithoutCustomersInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateManyWithoutCustomersInput } from "../inputs/OrdersUpdateManyWithoutCustomersInput";
import { ProjectsUpdateManyWithoutCustomersInput } from "../inputs/ProjectsUpdateManyWithoutCustomersInput";
import { QuotesUpdateManyWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateManyWithoutCustomers_customersToquotesInput";
import { ReturnsUpdateManyWithoutCustomersInput } from "../inputs/ReturnsUpdateManyWithoutCustomersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspacesUpdateManyWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithoutCustomers_customersToworkspacesInput";

@TypeGraphQL.InputType("CustomersUpdateWithoutMessagesInput", {
  isAbstract: true
})
export class CustomersUpdateWithoutMessagesInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name_prefix?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  middle_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_group?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  zipcode?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name_suffix?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  websites?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  product?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_since?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  confirmed_email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_birth?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tax_vat_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  short_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address_two?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  payment_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  comments?: CommentsUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  credit_memos?: Credit_memosUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  customer_group_customer_groupTocustomers?: Customer_groupUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpdateOneWithoutCustomersInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentUpdateOneWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => EmailsUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  emails?: EmailsUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  newsletter_subscribers?: Newsletter_subscribersUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  orders?: OrdersUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  projects?: ProjectsUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => QuotesUpdateManyWithoutCustomers_customersToquotesInput, {
    nullable: true
  })
  quotes?: QuotesUpdateManyWithoutCustomers_customersToquotesInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutCustomersInput, {
    nullable: true
  })
  returns?: ReturnsUpdateManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutCustomers_customersToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutCustomers_customersToworkspacesInput | undefined;
}
