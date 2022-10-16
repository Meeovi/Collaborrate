import { GraphQLResolveInfo } from "graphql";
import { CreateOneEmailsArgs } from "./args/CreateOneEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class CreateOneEmailsResolver {
    createOneEmails(ctx: any, info: GraphQLResolveInfo, args: CreateOneEmailsArgs): Promise<Emails>;
}
