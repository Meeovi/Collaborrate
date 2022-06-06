import { GraphQLResolveInfo } from "graphql";
import { UpsertEmailsArgs } from "./args/UpsertEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class UpsertEmailsResolver {
    upsertEmails(ctx: any, info: GraphQLResolveInfo, args: UpsertEmailsArgs): Promise<Emails>;
}
