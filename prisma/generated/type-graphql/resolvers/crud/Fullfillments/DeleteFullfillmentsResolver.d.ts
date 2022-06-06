import { GraphQLResolveInfo } from "graphql";
import { DeleteFullfillmentsArgs } from "./args/DeleteFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class DeleteFullfillmentsResolver {
    deleteFullfillments(ctx: any, info: GraphQLResolveInfo, args: DeleteFullfillmentsArgs): Promise<Fullfillments | null>;
}
