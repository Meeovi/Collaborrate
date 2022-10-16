import { GraphQLResolveInfo } from "graphql";
import { UpsertOneChecklistArgs } from "./args/UpsertOneChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class UpsertOneChecklistResolver {
    upsertOneChecklist(ctx: any, info: GraphQLResolveInfo, args: UpsertOneChecklistArgs): Promise<Checklist>;
}
