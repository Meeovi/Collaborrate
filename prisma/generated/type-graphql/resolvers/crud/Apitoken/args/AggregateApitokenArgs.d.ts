import { ApitokenOrderByWithRelationInput } from "../../../inputs/ApitokenOrderByWithRelationInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";
export declare class AggregateApitokenArgs {
    where?: ApitokenWhereInput | undefined;
    orderBy?: ApitokenOrderByWithRelationInput[] | undefined;
    cursor?: ApitokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
