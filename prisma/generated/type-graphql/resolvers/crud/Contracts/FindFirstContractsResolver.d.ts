import { GraphQLResolveInfo } from "graphql";
import { FindFirstContractsArgs } from "./args/FindFirstContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class FindFirstContractsResolver {
    findFirstContracts(ctx: any, info: GraphQLResolveInfo, args: FindFirstContractsArgs): Promise<Contracts | null>;
}
