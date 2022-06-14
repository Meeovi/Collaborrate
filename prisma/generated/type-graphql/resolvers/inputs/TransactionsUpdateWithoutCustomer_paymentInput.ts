import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateOneRequiredWithoutTransactionsInput } from "../inputs/OrdersUpdateOneRequiredWithoutTransactionsInput";

@TypeGraphQL.InputType("TransactionsUpdateWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsUpdateWithoutCustomer_paymentInput {
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

  @TypeGraphQL.Field(_type => OrdersUpdateOneRequiredWithoutTransactionsInput, {
    nullable: true
  })
  orders?: OrdersUpdateOneRequiredWithoutTransactionsInput | undefined;
}
