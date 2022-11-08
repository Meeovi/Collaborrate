import { GraphQLResolveInfo } from "graphql";
import { FindUniqueApitokenArgs } from "./args/FindUniqueApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class FindUniqueApitokenResolver {
    apitoken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueApitokenArgs): Promise<Apitoken | null>;
}
