import { GraphQLResolveInfo } from "graphql";
import { UpdateFullfillmentsArgs } from "./args/UpdateFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class UpdateFullfillmentsResolver {
    updateFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpdateFullfillmentsArgs): Promise<Fullfillments | null>;
}
