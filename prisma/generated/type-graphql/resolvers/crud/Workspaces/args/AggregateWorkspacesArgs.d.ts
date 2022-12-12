import { WorkspacesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WorkspacesOrderByWithRelationAndSearchRelevanceInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";
export declare class AggregateWorkspacesArgs {
    where?: WorkspacesWhereInput | undefined;
    orderBy?: WorkspacesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WorkspacesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
