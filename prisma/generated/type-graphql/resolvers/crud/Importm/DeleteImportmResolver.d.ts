import { GraphQLResolveInfo } from "graphql";
import { DeleteImportmArgs } from "./args/DeleteImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class DeleteImportmResolver {
    deleteImportm(ctx: any, info: GraphQLResolveInfo, args: DeleteImportmArgs): Promise<Importm | null>;
}
