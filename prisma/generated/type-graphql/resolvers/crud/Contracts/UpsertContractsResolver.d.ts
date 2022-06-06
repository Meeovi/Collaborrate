import { GraphQLResolveInfo } from "graphql";
import { UpsertContractsArgs } from "./args/UpsertContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class UpsertContractsResolver {
    upsertContracts(ctx: any, info: GraphQLResolveInfo, args: UpsertContractsArgs): Promise<Contracts>;
}
