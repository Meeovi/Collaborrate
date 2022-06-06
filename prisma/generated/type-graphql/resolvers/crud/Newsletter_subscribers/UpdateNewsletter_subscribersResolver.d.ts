import { GraphQLResolveInfo } from "graphql";
import { UpdateNewsletter_subscribersArgs } from "./args/UpdateNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class UpdateNewsletter_subscribersResolver {
    updateNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: UpdateNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null>;
}
