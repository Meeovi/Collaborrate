import { ImportmOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ImportmOrderByWithRelationAndSearchRelevanceInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";
export declare class AggregateImportmArgs {
    where?: ImportmWhereInput | undefined;
    orderBy?: ImportmOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ImportmWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
