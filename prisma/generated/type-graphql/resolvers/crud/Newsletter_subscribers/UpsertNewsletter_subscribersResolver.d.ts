import { GraphQLResolveInfo } from "graphql";
import { UpsertNewsletter_subscribersArgs } from "./args/UpsertNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class UpsertNewsletter_subscribersResolver {
    upsertNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: UpsertNewsletter_subscribersArgs): Promise<Newsletter_subscribers>;
}
