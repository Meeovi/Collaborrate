import { Comments } from "../../../models/Comments";
import { Customers } from "../../../models/Customers";
export declare class CommentsRelationsResolver {
    customers(comments: Comments, ctx: any): Promise<Customers>;
}
