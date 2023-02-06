import { PaymentsOrderByWithRelationInput } from "../../../inputs/PaymentsOrderByWithRelationInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";
export declare class FindFirstPaymentsOrThrowArgs {
    where?: PaymentsWhereInput | undefined;
    orderBy?: PaymentsOrderByWithRelationInput[] | undefined;
    cursor?: PaymentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active" | "country"> | undefined;
}
