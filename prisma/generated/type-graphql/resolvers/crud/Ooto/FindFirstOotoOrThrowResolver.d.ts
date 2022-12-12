import { GraphQLResolveInfo } from "graphql";
import { FindFirstOotoOrThrowArgs } from "./args/FindFirstOotoOrThrowArgs";
import { Ooto } from "../../../models/Ooto";
export declare class FindFirstOotoOrThrowResolver {
    findFirstOotoOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstOotoOrThrowArgs): Promise<Ooto | null>;
}
