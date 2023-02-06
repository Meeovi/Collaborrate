import { CitiesOrderByWithAggregationInput } from "../../../inputs/CitiesOrderByWithAggregationInput";
import { CitiesScalarWhereWithAggregatesInput } from "../../../inputs/CitiesScalarWhereWithAggregatesInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
export declare class GroupByCitiesArgs {
    where?: CitiesWhereInput | undefined;
    orderBy?: CitiesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "state" | "country" | "postalCode" | "image">;
    having?: CitiesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
