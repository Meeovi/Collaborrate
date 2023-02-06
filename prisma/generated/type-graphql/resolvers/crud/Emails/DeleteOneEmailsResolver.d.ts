import { GraphQLResolveInfo } from "graphql";
import { DeleteOneEmailsArgs } from "./args/DeleteOneEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class DeleteOneEmailsResolver {
    deleteOneEmails(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEmailsArgs): Promise<Emails | null>;
}
