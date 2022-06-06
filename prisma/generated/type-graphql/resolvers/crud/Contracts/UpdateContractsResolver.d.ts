import { GraphQLResolveInfo } from "graphql";
import { UpdateContractsArgs } from "./args/UpdateContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class UpdateContractsResolver {
    updateContracts(ctx: any, info: GraphQLResolveInfo, args: UpdateContractsArgs): Promise<Contracts | null>;
}
