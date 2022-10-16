import { GraphQLResolveInfo } from "graphql";
import { FindFirstApitokenArgs } from "./args/FindFirstApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class FindFirstApitokenResolver {
    findFirstApitoken(ctx: any, info: GraphQLResolveInfo, args: FindFirstApitokenArgs): Promise<Apitoken | null>;
}
