import { Shop_settingsOrderByWithRelationInput } from "../../../inputs/Shop_settingsOrderByWithRelationInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";
export declare class AggregateShop_settingsArgs {
    where?: Shop_settingsWhereInput | undefined;
    orderBy?: Shop_settingsOrderByWithRelationInput[] | undefined;
    cursor?: Shop_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
