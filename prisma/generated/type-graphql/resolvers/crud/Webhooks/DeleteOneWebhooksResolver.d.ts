import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWebhooksArgs } from "./args/DeleteOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class DeleteOneWebhooksResolver {
    deleteOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWebhooksArgs): Promise<Webhooks | null>;
}
