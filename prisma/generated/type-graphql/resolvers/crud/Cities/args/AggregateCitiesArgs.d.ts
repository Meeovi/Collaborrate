import { CitiesOrderByWithRelationInput } from "../../../inputs/CitiesOrderByWithRelationInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";
export declare class AggregateCitiesArgs {
    where?: CitiesWhereInput | undefined;
    orderBy?: CitiesOrderByWithRelationInput[] | undefined;
    cursor?: CitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
