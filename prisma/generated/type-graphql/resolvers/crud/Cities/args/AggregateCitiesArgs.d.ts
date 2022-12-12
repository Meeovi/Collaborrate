import { CitiesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CitiesOrderByWithRelationAndSearchRelevanceInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";
export declare class AggregateCitiesArgs {
    where?: CitiesWhereInput | undefined;
    orderBy?: CitiesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
