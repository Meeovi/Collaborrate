import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWebhooksOrThrowArgs } from "./args/FindUniqueWebhooksOrThrowArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class FindUniqueWebhooksOrThrowResolver {
    findUniqueWebhooksOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWebhooksOrThrowArgs): Promise<Webhooks | null>;
}
