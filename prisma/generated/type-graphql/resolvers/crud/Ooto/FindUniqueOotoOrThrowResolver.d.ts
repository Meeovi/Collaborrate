import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOotoOrThrowArgs } from "./args/FindUniqueOotoOrThrowArgs";
import { Ooto } from "../../../models/Ooto";
export declare class FindUniqueOotoOrThrowResolver {
    getOoto(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOotoOrThrowArgs): Promise<Ooto | null>;
}
