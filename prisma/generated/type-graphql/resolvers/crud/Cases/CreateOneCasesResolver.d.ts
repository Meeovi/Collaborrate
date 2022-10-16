import { GraphQLResolveInfo } from "graphql";
import { CreateOneCasesArgs } from "./args/CreateOneCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class CreateOneCasesResolver {
    createOneCases(ctx: any, info: GraphQLResolveInfo, args: CreateOneCasesArgs): Promise<Cases>;
}
