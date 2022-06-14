import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentUpdateOneRequiredWithoutTransactionsInput } from "../inputs/Customer_paymentUpdateOneRequiredWithoutTransactionsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TransactionsUpdateWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsUpdateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  transaction_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  parent_transaction_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  closed?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpdateOneRequiredWithoutTransactionsInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentUpdateOneRequiredWithoutTransactionsInput | undefined;
}
