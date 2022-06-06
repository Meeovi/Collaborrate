import { GraphQLResolveInfo } from "graphql";
import { CreateEmailsArgs } from "./args/CreateEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class CreateEmailsResolver {
    createEmails(ctx: any, info: GraphQLResolveInfo, args: CreateEmailsArgs): Promise<Emails>;
}
