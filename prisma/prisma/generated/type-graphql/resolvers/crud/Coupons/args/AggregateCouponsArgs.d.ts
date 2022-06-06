import { CouponsOrderByWithRelationInput } from "../../../inputs/CouponsOrderByWithRelationInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";
export declare class AggregateCouponsArgs {
    where?: CouponsWhereInput | undefined;
    orderBy?: CouponsOrderByWithRelationInput[] | undefined;
    cursor?: CouponsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
