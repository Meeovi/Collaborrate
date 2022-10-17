import { GraphQLResolveInfo } from "graphql";
import { UpdateOneImportmArgs } from "./args/UpdateOneImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class UpdateOneImportmResolver {
    updateOneImportm(ctx: any, info: GraphQLResolveInfo, args: UpdateOneImportmArgs): Promise<Importm | null>;
}
