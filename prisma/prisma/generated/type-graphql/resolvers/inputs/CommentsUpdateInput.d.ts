import { CustomersUpdateOneRequiredWithoutCommentsInput } from "../inputs/CustomersUpdateOneRequiredWithoutCommentsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CommentsUpdateInput {
    customer_name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    response?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    customers?: CustomersUpdateOneRequiredWithoutCommentsInput | undefined;
}
