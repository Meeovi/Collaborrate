import { GraphQLResolveInfo } from "graphql";
import { DeleteOneImportmArgs } from "./args/DeleteOneImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class DeleteOneImportmResolver {
    deleteOneImportm(ctx: any, info: GraphQLResolveInfo, args: DeleteOneImportmArgs): Promise<Importm | null>;
}
