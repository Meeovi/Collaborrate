import { Products } from "../../../models/Products";
import { Rating } from "../../../models/Rating";
export declare class RatingRelationsResolver {
    products(rating: Rating, ctx: any): Promise<Products>;
}
