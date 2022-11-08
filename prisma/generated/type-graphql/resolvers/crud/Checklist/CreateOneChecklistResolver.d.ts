import { GraphQLResolveInfo } from "graphql";
import { CreateOneChecklistArgs } from "./args/CreateOneChecklistArgs";
import { Checklist } from "../../../models/Checklist";
export declare class CreateOneChecklistResolver {
    createOneChecklist(ctx: any, info: GraphQLResolveInfo, args: CreateOneChecklistArgs): Promise<Checklist>;
}
