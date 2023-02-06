import { GraphQLResolveInfo } from "graphql";
import { FindManyApitokenArgs } from "./args/FindManyApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class FindManyApitokenResolver {
    apitokens(ctx: any, info: GraphQLResolveInfo, args: FindManyApitokenArgs): Promise<Apitoken[]>;
}
