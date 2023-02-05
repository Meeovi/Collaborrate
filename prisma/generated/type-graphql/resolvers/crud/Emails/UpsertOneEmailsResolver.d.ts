import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmailsArgs } from "./args/UpsertOneEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class UpsertOneEmailsResolver {
    upsertOneEmails(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEmailsArgs): Promise<Emails>;
}
