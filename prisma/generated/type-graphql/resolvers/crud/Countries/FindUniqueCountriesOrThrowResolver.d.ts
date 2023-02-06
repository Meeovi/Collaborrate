import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCountriesOrThrowArgs } from "./args/FindUniqueCountriesOrThrowArgs";
import { Countries } from "../../../models/Countries";
export declare class FindUniqueCountriesOrThrowResolver {
    findUniqueCountriesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCountriesOrThrowArgs): Promise<Countries | null>;
}
