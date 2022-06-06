import { GraphQLResolveInfo } from "graphql";
import { FindManyNewsletter_subscribersArgs } from "./args/FindManyNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class FindManyNewsletter_subscribersResolver {
    findManyNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: FindManyNewsletter_subscribersArgs): Promise<Newsletter_subscribers[]>;
}
