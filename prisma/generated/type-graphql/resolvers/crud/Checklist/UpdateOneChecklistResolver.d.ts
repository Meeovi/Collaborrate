import { GraphQLResolveInfo } from "graphql";
import { UpdateOneChecklistArgs } from "./args/UpdateOneChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class UpdateOneChecklistResolver {
    updateOneChecklist(ctx: any, info: GraphQLResolveInfo, args: UpdateOneChecklistArgs): Promise<Checklist | null>;
}
