import { GraphQLResolveInfo } from "graphql";
import { UpdateEmailsArgs } from "./args/UpdateEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class UpdateEmailsResolver {
    updateEmails(ctx: any, info: GraphQLResolveInfo, args: UpdateEmailsArgs): Promise<Emails | null>;
}
