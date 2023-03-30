import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmailsOrThrowArgs } from "./args/FindUniqueEmailsOrThrowArgs";
import { Emails } from "../../../models/Emails";
export declare class FindUniqueEmailsOrThrowResolver {
    findUniqueEmailsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmailsOrThrowArgs): Promise<Emails | null>;
}
