import { GraphQLResolveInfo } from "graphql";
import { FindManyChecklistArgs } from "./args/FindManyChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class FindManyChecklistResolver {
    checklists(ctx: any, info: GraphQLResolveInfo, args: FindManyChecklistArgs): Promise<Checklist[]>;
}
