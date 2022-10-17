import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWebhooksArgs } from "./args/FindUniqueWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class FindUniqueWebhooksResolver {
    findUniqueWebhooks(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWebhooksArgs): Promise<Webhooks | null>;
}
