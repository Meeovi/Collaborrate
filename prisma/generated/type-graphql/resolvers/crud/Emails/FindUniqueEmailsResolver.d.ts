import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmailsArgs } from "./args/FindUniqueEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class FindUniqueEmailsResolver {
    findUniqueEmails(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmailsArgs): Promise<Emails | null>;
}
