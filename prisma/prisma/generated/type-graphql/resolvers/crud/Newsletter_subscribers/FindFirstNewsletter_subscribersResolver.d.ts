import { GraphQLResolveInfo } from "graphql";
import { FindFirstNewsletter_subscribersArgs } from "./args/FindFirstNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class FindFirstNewsletter_subscribersResolver {
    findFirstNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: FindFirstNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null>;
}
