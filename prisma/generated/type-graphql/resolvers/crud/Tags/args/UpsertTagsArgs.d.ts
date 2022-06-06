import { TagsCreateInput } from "../../../inputs/TagsCreateInput";
import { TagsUpdateInput } from "../../../inputs/TagsUpdateInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";
export declare class UpsertTagsArgs {
    where: TagsWhereUniqueInput;
    create: TagsCreateInput;
    update: TagsUpdateInput;
}
