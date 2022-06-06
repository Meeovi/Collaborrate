import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutTax_ruleInput } from "../inputs/ProductsUpdateOneRequiredWithoutTax_ruleInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Tax_ruleUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    tax_rate?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: ProductsUpdateOneRequiredWithoutTax_ruleInput | undefined;
}
