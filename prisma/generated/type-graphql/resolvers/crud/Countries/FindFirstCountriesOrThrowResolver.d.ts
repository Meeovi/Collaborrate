import { GraphQLResolveInfo } from "graphql";
import { FindFirstCountriesOrThrowArgs } from "./args/FindFirstCountriesOrThrowArgs";
import { Countries } from "../../../models/Countries";
export declare class FindFirstCountriesOrThrowResolver {
    findFirstCountriesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCountriesOrThrowArgs): Promise<Countries | null>;
}
