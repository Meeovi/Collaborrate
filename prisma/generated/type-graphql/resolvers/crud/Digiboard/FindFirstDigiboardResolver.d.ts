import { GraphQLResolveInfo } from "graphql";
import { FindFirstDigiboardArgs } from "./args/FindFirstDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class FindFirstDigiboardResolver {
    findFirstDigiboard(ctx: any, info: GraphQLResolveInfo, args: FindFirstDigiboardArgs): Promise<Digiboard | null>;
}
