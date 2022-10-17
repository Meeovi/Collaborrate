import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDigiboardArgs } from "./args/FindUniqueDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class FindUniqueDigiboardResolver {
    digiboard(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDigiboardArgs): Promise<Digiboard | null>;
}
