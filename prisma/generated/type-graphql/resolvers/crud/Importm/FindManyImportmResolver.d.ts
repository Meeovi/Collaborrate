import { GraphQLResolveInfo } from "graphql";
import { FindManyImportmArgs } from "./args/FindManyImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class FindManyImportmResolver {
    importms(ctx: any, info: GraphQLResolveInfo, args: FindManyImportmArgs): Promise<Importm[]>;
}
