import { GraphQLResolveInfo } from "graphql";
import { CreateImportmArgs } from "./args/CreateImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class CreateImportmResolver {
    createImportm(ctx: any, info: GraphQLResolveInfo, args: CreateImportmArgs): Promise<Importm>;
}
