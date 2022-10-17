import { GraphQLResolveInfo } from "graphql";
import { FindManyCasesArgs } from "./args/FindManyCasesArgs";
import { Cases } from "../../../models/Cases";
export declare class FindManyCasesResolver {
    findManyCases(ctx: any, info: GraphQLResolveInfo, args: FindManyCasesArgs): Promise<Cases[]>;
}
