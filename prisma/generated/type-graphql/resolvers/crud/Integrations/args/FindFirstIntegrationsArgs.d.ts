import { IntegrationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IntegrationsOrderByWithRelationAndSearchRelevanceInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";
export declare class FindFirstIntegrationsArgs {
    where?: IntegrationsWhereInput | undefined;
    orderBy?: IntegrationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: IntegrationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "content" | "media" | "location" | "category"> | undefined;
}
