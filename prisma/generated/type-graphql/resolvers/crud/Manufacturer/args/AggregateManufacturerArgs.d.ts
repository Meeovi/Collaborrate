import { ManufacturerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ManufacturerOrderByWithRelationAndSearchRelevanceInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";
export declare class AggregateManufacturerArgs {
    where?: ManufacturerWhereInput | undefined;
    orderBy?: ManufacturerOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ManufacturerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
