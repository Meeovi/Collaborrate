import { GraphQLResolveInfo } from "graphql";
import { UpsertOneDigiboardArgs } from "./args/UpsertOneDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class UpsertOneDigiboardResolver {
    upsertOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDigiboardArgs): Promise<Digiboard>;
}
