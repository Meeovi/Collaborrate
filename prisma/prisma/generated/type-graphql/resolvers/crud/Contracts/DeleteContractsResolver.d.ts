import { GraphQLResolveInfo } from "graphql";
import { DeleteContractsArgs } from "./args/DeleteContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class DeleteContractsResolver {
    deleteContracts(ctx: any, info: GraphQLResolveInfo, args: DeleteContractsArgs): Promise<Contracts | null>;
}
