import { GraphQLResolveInfo } from "graphql";
import { FindUniqueChecklistArgs } from "./args/FindUniqueChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class FindUniqueChecklistResolver {
    checklist(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChecklistArgs): Promise<Checklist | null>;
}
