import { SettingsCreateInput } from "../../../inputs/SettingsCreateInput";
import { SettingsUpdateInput } from "../../../inputs/SettingsUpdateInput";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";
export declare class UpsertOneSettingsArgs {
    where: SettingsWhereUniqueInput;
    create: SettingsCreateInput;
    update: SettingsUpdateInput;
}
