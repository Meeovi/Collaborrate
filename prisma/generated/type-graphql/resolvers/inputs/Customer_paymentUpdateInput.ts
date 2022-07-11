import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CustomersUpdateOneRequiredWithoutCustomer_paymentNestedInput } from "../inputs/CustomersUpdateOneRequiredWithoutCustomer_paymentNestedInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TransactionsUpdateManyWithoutCustomer_paymentNestedInput } from "../inputs/TransactionsUpdateManyWithoutCustomer_paymentNestedInput";

@TypeGraphQL.InputType("Customer_paymentUpdateInput", {
  isAbstract: true
})
export class Customer_paymentUpdateInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  payment_info?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  provider?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  account_no?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  expiry?: NullableBigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCustomer_paymentNestedInput, {
    nullable: true
  })
  customers?: CustomersUpdateOneRequiredWithoutCustomer_paymentNestedInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsUpdateManyWithoutCustomer_paymentNestedInput, {
    nullable: true
  })
  transactions?: TransactionsUpdateManyWithoutCustomer_paymentNestedInput | undefined;
}
