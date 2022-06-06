import { TargetsOrderByWithRelationInput } from "../../../inputs/TargetsOrderByWithRelationInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";
export declare class AggregateTargetsArgs {
    where?: TargetsWhereInput | undefined;
    orderBy?: TargetsOrderByWithRelationInput[] | undefined;
    cursor?: TargetsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
