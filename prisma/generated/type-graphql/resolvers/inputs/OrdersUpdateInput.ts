import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersUpdateOneRequiredWithoutOrdersNestedInput } from "../inputs/CustomersUpdateOneRequiredWithoutOrdersNestedInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutOrdersNestedInput } from "../inputs/ProductsUpdateOneRequiredWithoutOrdersNestedInput";
import { QuotesUpdateManyWithoutOrdersNestedInput } from "../inputs/QuotesUpdateManyWithoutOrdersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionsUpdateManyWithoutOrdersNestedInput } from "../inputs/TransactionsUpdateManyWithoutOrdersNestedInput";

@TypeGraphQL.InputType("OrdersUpdateInput", {
  isAbstract: true
})
export class OrdersUpdateInput {
  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  purchase_point?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  purchase_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bill_to_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ship_to_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  grand_total_base?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  grand_total_purchased?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  action?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  allocated_sources?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  braintree_transaction_source?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutOrdersNestedInput, {
    nullable: true
  })
  customers?: CustomersUpdateOneRequiredWithoutOrdersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneRequiredWithoutOrdersNestedInput, {
    nullable: true
  })
  products?: ProductsUpdateOneRequiredWithoutOrdersNestedInput | undefined;

  @TypeGraphQL.Field(_type => QuotesUpdateManyWithoutOrdersNestedInput, {
    nullable: true
  })
  quotes?: QuotesUpdateManyWithoutOrdersNestedInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsUpdateManyWithoutOrdersNestedInput, {
    nullable: true
  })
  transactions?: TransactionsUpdateManyWithoutOrdersNestedInput | undefined;
}
