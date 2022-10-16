import { GraphQLResolveInfo } from "graphql";
import { UpdateOneEmailsArgs } from "./args/UpdateOneEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class UpdateOneEmailsResolver {
    updateOneEmails(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEmailsArgs): Promise<Emails | null>;
}
