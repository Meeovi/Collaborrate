import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Currency_symbolsUpdateManyMutationInput {
    symbol?: StringFieldUpdateOperationsInput | undefined;
    use_standard?: NullableBoolFieldUpdateOperationsInput | undefined;
    id?: BigIntFieldUpdateOperationsInput | undefined;
}
