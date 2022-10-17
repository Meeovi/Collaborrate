import { CouponsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CouponsOrderByWithRelationAndSearchRelevanceInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";
export declare class AggregateCouponsArgs {
    where?: CouponsWhereInput | undefined;
    orderBy?: CouponsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CouponsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
