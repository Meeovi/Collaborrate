import { GraphQLResolveInfo } from "graphql";
import { FindFirstWebhooksArgs } from "./args/FindFirstWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class FindFirstWebhooksResolver {
    findFirstWebhooks(ctx: any, info: GraphQLResolveInfo, args: FindFirstWebhooksArgs): Promise<Webhooks | null>;
}
