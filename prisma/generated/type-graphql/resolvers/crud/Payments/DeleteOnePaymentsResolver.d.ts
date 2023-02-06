import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePaymentsArgs } from "./args/DeleteOnePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class DeleteOnePaymentsResolver {
    deleteOnePayments(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePaymentsArgs): Promise<Payments | null>;
}
