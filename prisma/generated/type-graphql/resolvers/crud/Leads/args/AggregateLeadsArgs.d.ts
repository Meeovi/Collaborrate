import { LeadsOrderByWithRelationInput } from "../../../inputs/LeadsOrderByWithRelationInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";
export declare class AggregateLeadsArgs {
    where?: LeadsWhereInput | undefined;
    orderBy?: LeadsOrderByWithRelationInput[] | undefined;
    cursor?: LeadsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
