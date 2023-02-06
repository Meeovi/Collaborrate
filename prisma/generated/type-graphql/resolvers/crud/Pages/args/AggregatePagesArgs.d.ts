import { PagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PagesOrderByWithRelationAndSearchRelevanceInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
export declare class AggregatePagesArgs {
    where?: PagesWhereInput | undefined;
    orderBy?: PagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
