import { GraphQLResolveInfo } from "graphql";
import { FindFirstImportmArgs } from "./args/FindFirstImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class FindFirstImportmResolver {
    findFirstImportm(ctx: any, info: GraphQLResolveInfo, args: FindFirstImportmArgs): Promise<Importm | null>;
}
