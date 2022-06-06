import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class AgreementsUpdateManyMutationInput {
    reference_id?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    excerpt?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    user_id?: IntFieldUpdateOperationsInput | undefined;
    shop_id?: IntFieldUpdateOperationsInput | undefined;
}
