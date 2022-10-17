import { GraphQLResolveInfo } from "graphql";
import { FindFirstChecklistArgs } from "./args/FindFirstChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class FindFirstChecklistResolver {
    findFirstChecklist(ctx: any, info: GraphQLResolveInfo, args: FindFirstChecklistArgs): Promise<Checklist | null>;
}
