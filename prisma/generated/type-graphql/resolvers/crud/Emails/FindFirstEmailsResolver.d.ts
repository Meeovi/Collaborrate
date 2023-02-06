import { GraphQLResolveInfo } from "graphql";
import { FindFirstEmailsArgs } from "./args/FindFirstEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class FindFirstEmailsResolver {
    findFirstEmails(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmailsArgs): Promise<Emails | null>;
}
