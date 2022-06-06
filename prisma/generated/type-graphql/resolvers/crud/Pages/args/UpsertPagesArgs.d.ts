import { PagesCreateInput } from "../../../inputs/PagesCreateInput";
import { PagesUpdateInput } from "../../../inputs/PagesUpdateInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
export declare class UpsertPagesArgs {
    where: PagesWhereUniqueInput;
    create: PagesCreateInput;
    update: PagesUpdateInput;
}
