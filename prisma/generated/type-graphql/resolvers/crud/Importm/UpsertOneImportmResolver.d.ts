import { GraphQLResolveInfo } from "graphql";
import { UpsertOneImportmArgs } from "./args/UpsertOneImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class UpsertOneImportmResolver {
    upsertOneImportm(ctx: any, info: GraphQLResolveInfo, args: UpsertOneImportmArgs): Promise<Importm>;
}
