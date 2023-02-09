import { TemplatesCreateInput } from "../../../inputs/TemplatesCreateInput";
import { TemplatesUpdateInput } from "../../../inputs/TemplatesUpdateInput";
import { TemplatesWhereUniqueInput } from "../../../inputs/TemplatesWhereUniqueInput";
export declare class UpsertOneTemplatesArgs {
    where: TemplatesWhereUniqueInput;
    create: TemplatesCreateInput;
    update: TemplatesUpdateInput;
}
