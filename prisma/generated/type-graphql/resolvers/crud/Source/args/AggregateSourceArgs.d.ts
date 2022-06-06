import { SourceOrderByWithRelationInput } from "../../../inputs/SourceOrderByWithRelationInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";
export declare class AggregateSourceArgs {
    where?: SourceWhereInput | undefined;
    orderBy?: SourceOrderByWithRelationInput[] | undefined;
    cursor?: SourceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
