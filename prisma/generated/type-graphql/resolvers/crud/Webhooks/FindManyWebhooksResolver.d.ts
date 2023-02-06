import { GraphQLResolveInfo } from "graphql";
import { FindManyWebhooksArgs } from "./args/FindManyWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class FindManyWebhooksResolver {
    findManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: FindManyWebhooksArgs): Promise<Webhooks[]>;
}
