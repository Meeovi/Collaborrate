import { ThemesOrderByWithRelationInput } from "../../../inputs/ThemesOrderByWithRelationInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";
export declare class AggregateThemesArgs {
    where?: ThemesWhereInput | undefined;
    orderBy?: ThemesOrderByWithRelationInput[] | undefined;
    cursor?: ThemesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
