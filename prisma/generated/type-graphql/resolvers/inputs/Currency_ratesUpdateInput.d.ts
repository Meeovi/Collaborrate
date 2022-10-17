import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Currency_ratesUpdateInput {
    import_service?: StringFieldUpdateOperationsInput | undefined;
    usd?: NullableDecimalFieldUpdateOperationsInput | undefined;
    id?: BigIntFieldUpdateOperationsInput | undefined;
}
