import { ThemesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ThemesOrderByWithRelationAndSearchRelevanceInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";
export declare class AggregateThemesArgs {
    where?: ThemesWhereInput | undefined;
    orderBy?: ThemesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ThemesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
