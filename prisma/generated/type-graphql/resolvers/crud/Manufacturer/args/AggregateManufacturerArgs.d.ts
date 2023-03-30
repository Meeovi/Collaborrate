import { ManufacturerOrderByWithRelationInput } from "../../../inputs/ManufacturerOrderByWithRelationInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";
export declare class AggregateManufacturerArgs {
    where?: ManufacturerWhereInput | undefined;
    orderBy?: ManufacturerOrderByWithRelationInput[] | undefined;
    cursor?: ManufacturerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
