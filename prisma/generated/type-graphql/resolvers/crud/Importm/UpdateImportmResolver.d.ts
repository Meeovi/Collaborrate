import { GraphQLResolveInfo } from "graphql";
import { UpdateImportmArgs } from "./args/UpdateImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class UpdateImportmResolver {
    updateImportm(ctx: any, info: GraphQLResolveInfo, args: UpdateImportmArgs): Promise<Importm | null>;
}
