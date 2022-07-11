import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateNestedManyWithoutCustomersInput } from "../inputs/CommentsCreateNestedManyWithoutCustomersInput";
import { Credit_memosCreateNestedManyWithoutCustomersInput } from "../inputs/Credit_memosCreateNestedManyWithoutCustomersInput";
import { Customer_groupCreateNestedManyWithoutCustomersInput } from "../inputs/Customer_groupCreateNestedManyWithoutCustomersInput";
import { Customer_paymentCreateNestedOneWithoutCustomersInput } from "../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput";
import { EmailsCreateNestedManyWithoutCustomersInput } from "../inputs/EmailsCreateNestedManyWithoutCustomersInput";
import { MediamanagerCreateNestedManyWithoutCustomersInput } from "../inputs/MediamanagerCreateNestedManyWithoutCustomersInput";
import { MessagesCreateNestedManyWithoutCustomersInput } from "../inputs/MessagesCreateNestedManyWithoutCustomersInput";
import { OrdersCreateNestedManyWithoutCustomersInput } from "../inputs/OrdersCreateNestedManyWithoutCustomersInput";
import { ProjectsCreateNestedManyWithoutCustomersInput } from "../inputs/ProjectsCreateNestedManyWithoutCustomersInput";
import { QuotesCreateNestedManyWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateNestedManyWithoutCustomers_customersToquotesInput";
import { ReturnsCreateNestedManyWithoutCustomersInput } from "../inputs/ReturnsCreateNestedManyWithoutCustomersInput";
import { WorkspacesCreateNestedManyWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutCustomers_customersToworkspacesInput";

@TypeGraphQL.InputType("CustomersCreateWithoutNewsletter_subscribersInput", {
  isAbstract: true
})
export class CustomersCreateWithoutNewsletter_subscribersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name_prefix?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middle_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_group?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name_suffix?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  customer_since?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  confirmed_email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  date_of_birth?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_vat_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gender?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_two?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  comments?: CommentsCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  credit_memos?: Credit_memosCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  customer_group_customer_groupTocustomers?: Customer_groupCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutCustomersInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentCreateNestedOneWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  emails?: EmailsCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  mediamanager?: MediamanagerCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => MessagesCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  messages?: MessagesCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  orders?: OrdersCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  projects?: ProjectsCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutCustomers_customersToquotesInput, {
    nullable: true
  })
  quotes?: QuotesCreateNestedManyWithoutCustomers_customersToquotesInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutCustomersInput, {
    nullable: true
  })
  returns?: ReturnsCreateNestedManyWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutCustomers_customersToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutCustomers_customersToworkspacesInput | undefined;
}
