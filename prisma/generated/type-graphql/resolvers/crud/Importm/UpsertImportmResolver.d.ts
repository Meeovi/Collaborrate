import { GraphQLResolveInfo } from "graphql";
import { UpsertImportmArgs } from "./args/UpsertImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class UpsertImportmResolver {
    upsertImportm(ctx: any, info: GraphQLResolveInfo, args: UpsertImportmArgs): Promise<Importm>;
}
