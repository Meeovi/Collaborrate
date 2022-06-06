import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ArticlesUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    excerpt?: StringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    categories?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    cust_id?: IntFieldUpdateOperationsInput | undefined;
}
