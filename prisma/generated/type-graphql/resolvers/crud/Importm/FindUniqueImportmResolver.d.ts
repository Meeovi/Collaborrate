import { GraphQLResolveInfo } from "graphql";
import { FindUniqueImportmArgs } from "./args/FindUniqueImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class FindUniqueImportmResolver {
    importm(ctx: any, info: GraphQLResolveInfo, args: FindUniqueImportmArgs): Promise<Importm | null>;
}
