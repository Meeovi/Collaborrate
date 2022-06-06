import { PagesOrderByWithRelationInput } from "../../../inputs/PagesOrderByWithRelationInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
export declare class AggregatePagesArgs {
    where?: PagesWhereInput | undefined;
    orderBy?: PagesOrderByWithRelationInput[] | undefined;
    cursor?: PagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
