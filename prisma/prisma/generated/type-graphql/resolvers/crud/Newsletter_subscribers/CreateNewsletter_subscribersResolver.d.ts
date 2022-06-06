import { GraphQLResolveInfo } from "graphql";
import { CreateNewsletter_subscribersArgs } from "./args/CreateNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class CreateNewsletter_subscribersResolver {
    createNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: CreateNewsletter_subscribersArgs): Promise<Newsletter_subscribers>;
}
