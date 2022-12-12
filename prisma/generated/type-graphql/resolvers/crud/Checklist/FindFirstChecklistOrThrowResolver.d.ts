import { GraphQLResolveInfo } from "graphql";
import { FindFirstChecklistOrThrowArgs } from "./args/FindFirstChecklistOrThrowArgs";
import { Checklist } from "../../../models/Checklist";
export declare class FindFirstChecklistOrThrowResolver {
    findFirstChecklistOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstChecklistOrThrowArgs): Promise<Checklist | null>;
}
