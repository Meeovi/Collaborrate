import { ApitokenOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ApitokenOrderByWithRelationAndSearchRelevanceInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";
export declare class AggregateApitokenArgs {
    where?: ApitokenWhereInput | undefined;
    orderBy?: ApitokenOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ApitokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
