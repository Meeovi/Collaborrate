import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTaxesArgs } from "./args/UpdateOneTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class UpdateOneTaxesResolver {
    updateOneTaxes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTaxesArgs): Promise<Taxes | null>;
}
