import { LeadsCreateInput } from "../../../inputs/LeadsCreateInput";
import { LeadsUpdateInput } from "../../../inputs/LeadsUpdateInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";
export declare class UpsertOneLeadsArgs {
    where: LeadsWhereUniqueInput;
    create: LeadsCreateInput;
    update: LeadsUpdateInput;
}
