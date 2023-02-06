import { PagesCreateInput } from "../../../inputs/PagesCreateInput";
import { PagesUpdateInput } from "../../../inputs/PagesUpdateInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
export declare class UpsertOnePagesArgs {
    where: PagesWhereUniqueInput;
    create: PagesCreateInput;
    update: PagesUpdateInput;
}
