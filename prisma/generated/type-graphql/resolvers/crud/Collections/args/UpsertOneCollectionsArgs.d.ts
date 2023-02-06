import { CollectionsCreateInput } from "../../../inputs/CollectionsCreateInput";
import { CollectionsUpdateInput } from "../../../inputs/CollectionsUpdateInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
export declare class UpsertOneCollectionsArgs {
    where: CollectionsWhereUniqueInput;
    create: CollectionsCreateInput;
    update: CollectionsUpdateInput;
}
