import { Sales_settingsOrderByWithRelationInput } from "../../../inputs/Sales_settingsOrderByWithRelationInput";
import { Sales_settingsWhereInput } from "../../../inputs/Sales_settingsWhereInput";
import { Sales_settingsWhereUniqueInput } from "../../../inputs/Sales_settingsWhereUniqueInput";
export declare class AggregateSales_settingsArgs {
    where?: Sales_settingsWhereInput | undefined;
    orderBy?: Sales_settingsOrderByWithRelationInput[] | undefined;
    cursor?: Sales_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
