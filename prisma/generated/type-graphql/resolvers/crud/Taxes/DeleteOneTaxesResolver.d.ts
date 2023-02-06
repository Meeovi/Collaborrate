import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTaxesArgs } from "./args/DeleteOneTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class DeleteOneTaxesResolver {
    deleteOneTaxes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTaxesArgs): Promise<Taxes | null>;
}
