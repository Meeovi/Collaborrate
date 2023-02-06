import { GraphQLResolveInfo } from "graphql";
import { FindUniqueApitokenOrThrowArgs } from "./args/FindUniqueApitokenOrThrowArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class FindUniqueApitokenOrThrowResolver {
    getApitoken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueApitokenOrThrowArgs): Promise<Apitoken | null>;
}
