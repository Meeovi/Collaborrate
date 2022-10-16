import { GraphQLResolveInfo } from "graphql";
import { UpsertOneContractsArgs } from "./args/UpsertOneContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class UpsertOneContractsResolver {
    upsertOneContracts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneContractsArgs): Promise<Contracts>;
}
