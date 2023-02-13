import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmailsOrThrowArgs } from "./args/FindFirstEmailsOrThrowArgs";
import { Emails } from "../../../models/Emails";
export declare class FindFirstEmailsOrThrowResolver {
    findFirstEmailsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmailsOrThrowArgs): Promise<Emails | null>;
}
