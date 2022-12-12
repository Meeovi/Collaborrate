import { GraphQLResolveInfo } from "graphql";
import { CreateOneWebhooksArgs } from "./args/CreateOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class CreateOneWebhooksResolver {
    createOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: CreateOneWebhooksArgs): Promise<Webhooks>;
}
