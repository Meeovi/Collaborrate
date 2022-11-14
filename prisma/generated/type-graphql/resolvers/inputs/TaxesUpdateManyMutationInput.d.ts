import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TaxesUpdateManyMutationInput {
    tax_identifier?: StringFieldUpdateOperationsInput | undefined;
    postcode?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    rate_percent?: NullableStringFieldUpdateOperationsInput | undefined;
    taxDefault?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    taxRuleName?: NullableStringFieldUpdateOperationsInput | undefined;
    taxCategory?: NullableStringFieldUpdateOperationsInput | undefined;
}
