import { ThemesCreateInput } from "../../../inputs/ThemesCreateInput";
import { ThemesUpdateInput } from "../../../inputs/ThemesUpdateInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";
export declare class UpsertOneThemesArgs {
    where: ThemesWhereUniqueInput;
    create: ThemesCreateInput;
    update: ThemesUpdateInput;
}
