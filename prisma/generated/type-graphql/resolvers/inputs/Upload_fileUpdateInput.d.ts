import { Prisma } from "@prisma/client";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Upload_fileUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    alternativeText?: NullableStringFieldUpdateOperationsInput | undefined;
    caption?: NullableStringFieldUpdateOperationsInput | undefined;
    width?: NullableIntFieldUpdateOperationsInput | undefined;
    height?: NullableIntFieldUpdateOperationsInput | undefined;
    formats?: Prisma.InputJsonValue | undefined;
    hash?: StringFieldUpdateOperationsInput | undefined;
    ext?: NullableStringFieldUpdateOperationsInput | undefined;
    mime?: StringFieldUpdateOperationsInput | undefined;
    size?: DecimalFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    previewUrl?: NullableStringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    provider_metadata?: Prisma.InputJsonValue | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
