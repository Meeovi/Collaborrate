import { GraphQLResolveInfo } from "graphql";
import { FindFirstWebhooksOrThrowArgs } from "./args/FindFirstWebhooksOrThrowArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class FindFirstWebhooksOrThrowResolver {
    findFirstWebhooksOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWebhooksOrThrowArgs): Promise<Webhooks | null>;
}
