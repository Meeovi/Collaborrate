import { GraphQLResolveInfo } from "graphql";
import { UpdateOneContractsArgs } from "./args/UpdateOneContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class UpdateOneContractsResolver {
    updateOneContracts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneContractsArgs): Promise<Contracts | null>;
}
