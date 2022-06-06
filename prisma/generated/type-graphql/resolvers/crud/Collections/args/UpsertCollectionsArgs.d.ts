import { CollectionsCreateInput } from "../../../inputs/CollectionsCreateInput";
import { CollectionsUpdateInput } from "../../../inputs/CollectionsUpdateInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
export declare class UpsertCollectionsArgs {
    where: CollectionsWhereUniqueInput;
    create: CollectionsCreateInput;
    update: CollectionsUpdateInput;
}
