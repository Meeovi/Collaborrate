import { GraphQLResolveInfo } from "graphql";
import { FindUniqueChecklistOrThrowArgs } from "./args/FindUniqueChecklistOrThrowArgs";
import { Checklist } from "../../../models/Checklist";
export declare class FindUniqueChecklistOrThrowResolver {
    getChecklist(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChecklistOrThrowArgs): Promise<Checklist | null>;
}
