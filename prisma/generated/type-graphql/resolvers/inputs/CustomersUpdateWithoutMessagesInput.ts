import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateManyWithoutCustomersNestedInput } from "../inputs/CommentsUpdateManyWithoutCustomersNestedInput";
import { Credit_memosUpdateManyWithoutCustomersNestedInput } from "../inputs/Credit_memosUpdateManyWithoutCustomersNestedInput";
import { Customer_groupUpdateManyWithoutCustomersNestedInput } from "../inputs/Customer_groupUpdateManyWithoutCustomersNestedInput";
import { Customer_paymentUpdateOneWithoutCustomersNestedInput } from "../inputs/Customer_paymentUpdateOneWithoutCustomersNestedInput";
import { EmailsUpdateManyWithoutCustomersNestedInput } from "../inputs/EmailsUpdateManyWithoutCustomersNestedInput";
import { MediamanagerUpdateManyWithoutCustomersNestedInput } from "../inputs/MediamanagerUpdateManyWithoutCustomersNestedInput";
import { Newsletter_subscribersUpdateManyWithoutCustomersNestedInput } from "../inputs/Newsletter_subscribersUpdateManyWithoutCustomersNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateManyWithoutCustomersNestedInput } from "../inputs/OrdersUpdateManyWithoutCustomersNestedInput";
import { ProjectsUpdateManyWithoutCustomersNestedInput } from "../inputs/ProjectsUpdateManyWithoutCustomersNestedInput";
import { QuotesUpdateManyWithoutCustomers_customersToquotesNestedInput } from "../inputs/QuotesUpdateManyWithoutCustomers_customersToquotesNestedInput";
import { ReturnsUpdateManyWithoutCustomersNestedInput } from "../inputs/ReturnsUpdateManyWithoutCustomersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspacesUpdateManyWithoutCustomers_customersToworkspacesNestedInput } from "../inputs/WorkspacesUpdateManyWithoutCustomers_customersToworkspacesNestedInput";

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

  @TypeGraphQL.Field(_type => CommentsUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  comments?: CommentsUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  credit_memos?: Credit_memosUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  customer_group_customer_groupTocustomers?: Customer_groupUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpdateOneWithoutCustomersNestedInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentUpdateOneWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => EmailsUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  emails?: EmailsUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  newsletter_subscribers?: Newsletter_subscribersUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  orders?: OrdersUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  projects?: ProjectsUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => QuotesUpdateManyWithoutCustomers_customersToquotesNestedInput, {
    nullable: true
  })
  quotes?: QuotesUpdateManyWithoutCustomers_customersToquotesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutCustomersNestedInput, {
    nullable: true
  })
  returns?: ReturnsUpdateManyWithoutCustomersNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutCustomers_customersToworkspacesNestedInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutCustomers_customersToworkspacesNestedInput | undefined;
}
