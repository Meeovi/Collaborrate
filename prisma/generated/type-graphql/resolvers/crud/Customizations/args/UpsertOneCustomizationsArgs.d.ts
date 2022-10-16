import { CustomizationsCreateInput } from "../../../inputs/CustomizationsCreateInput";
import { CustomizationsUpdateInput } from "../../../inputs/CustomizationsUpdateInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";
export declare class UpsertOneCustomizationsArgs {
    where: CustomizationsWhereUniqueInput;
    create: CustomizationsCreateInput;
    update: CustomizationsUpdateInput;
}
