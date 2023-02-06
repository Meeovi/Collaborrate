import { GraphQLResolveInfo } from "graphql";
import { FindManyEmailsArgs } from "./args/FindManyEmailsArgs";
import { Emails } from "../../../models/Emails";
export declare class FindManyEmailsResolver {
    findManyEmails(ctx: any, info: GraphQLResolveInfo, args: FindManyEmailsArgs): Promise<Emails[]>;
}
