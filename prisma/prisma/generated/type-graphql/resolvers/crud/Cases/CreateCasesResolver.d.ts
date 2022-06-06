import { GraphQLResolveInfo } from "graphql";
import { CreateCasesArgs } from "./args/CreateCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class CreateCasesResolver {
    createCases(ctx: any, info: GraphQLResolveInfo, args: CreateCasesArgs): Promise<Cases>;
}
