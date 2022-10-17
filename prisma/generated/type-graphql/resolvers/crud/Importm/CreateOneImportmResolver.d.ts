import { GraphQLResolveInfo } from "graphql";
import { CreateOneImportmArgs } from "./args/CreateOneImportmArgs";
import { Importm } from "../../../models/Importm";
export declare class CreateOneImportmResolver {
    createOneImportm(ctx: any, info: GraphQLResolveInfo, args: CreateOneImportmArgs): Promise<Importm>;
}
