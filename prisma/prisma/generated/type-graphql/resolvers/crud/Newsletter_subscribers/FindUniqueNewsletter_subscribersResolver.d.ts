import { GraphQLResolveInfo } from "graphql";
import { FindUniqueNewsletter_subscribersArgs } from "./args/FindUniqueNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class FindUniqueNewsletter_subscribersResolver {
    findUniqueNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null>;
}
