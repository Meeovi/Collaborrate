import { GraphQLResolveInfo } from "graphql";
import { DeleteNewsletter_subscribersArgs } from "./args/DeleteNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class DeleteNewsletter_subscribersResolver {
    deleteNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: DeleteNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null>;
}
