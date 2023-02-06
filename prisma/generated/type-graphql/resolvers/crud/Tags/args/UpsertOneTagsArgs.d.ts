import { TagsCreateInput } from "../../../inputs/TagsCreateInput";
import { TagsUpdateInput } from "../../../inputs/TagsUpdateInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";
export declare class UpsertOneTagsArgs {
    where: TagsWhereUniqueInput;
    create: TagsCreateInput;
    update: TagsUpdateInput;
}
