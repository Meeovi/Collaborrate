import { GraphQLResolveInfo } from "graphql";
import { DeleteEmailsArgs } from "./args/DeleteEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class DeleteEmailsResolver {
    deleteEmails(ctx: any, info: GraphQLResolveInfo, args: DeleteEmailsArgs): Promise<Emails | null>;
}
