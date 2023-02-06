import { ProvidersOrderByWithRelationInput } from "../../../inputs/ProvidersOrderByWithRelationInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";
export declare class FindManyProvidersArgs {
    where?: ProvidersWhereInput | undefined;
    orderBy?: ProvidersOrderByWithRelationInput[] | undefined;
    cursor?: ProvidersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active"> | undefined;
}
