import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CouponsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    excerpt?: NullableStringFieldUpdateOperationsInput | undefined;
    discount?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    expiration?: NullableStringFieldUpdateOperationsInput | undefined;
    categories?: NullableStringFieldUpdateOperationsInput | undefined;
    articles?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
    prod_id?: BigIntFieldUpdateOperationsInput | undefined;
    products_couponsToproducts?: NullableStringFieldUpdateOperationsInput | undefined;
}
