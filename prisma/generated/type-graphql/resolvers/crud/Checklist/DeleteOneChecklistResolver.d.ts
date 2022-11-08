import { GraphQLResolveInfo } from "graphql";
import { DeleteOneChecklistArgs } from "./args/DeleteOneChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class DeleteOneChecklistResolver {
    deleteOneChecklist(ctx: any, info: GraphQLResolveInfo, args: DeleteOneChecklistArgs): Promise<Checklist | null>;
}
