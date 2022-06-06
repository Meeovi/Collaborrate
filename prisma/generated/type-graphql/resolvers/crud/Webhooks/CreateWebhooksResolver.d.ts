import { GraphQLResolveInfo } from "graphql";
import { CreateWebhooksArgs } from "./args/CreateWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class CreateWebhooksResolver {
    createWebhooks(ctx: any, info: GraphQLResolveInfo, args: CreateWebhooksArgs): Promise<Webhooks>;
}
