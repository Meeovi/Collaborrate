import { AttributesCreateInput } from "../../../inputs/AttributesCreateInput";
import { AttributesUpdateInput } from "../../../inputs/AttributesUpdateInput";
import { AttributesWhereUniqueInput } from "../../../inputs/AttributesWhereUniqueInput";
export declare class UpsertOneAttributesArgs {
    where: AttributesWhereUniqueInput;
    create: AttributesCreateInput;
    update: AttributesUpdateInput;
}
