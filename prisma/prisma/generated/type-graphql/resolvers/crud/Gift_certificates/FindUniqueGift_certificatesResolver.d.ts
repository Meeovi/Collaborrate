import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGift_certificatesArgs } from "./args/FindUniqueGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class FindUniqueGift_certificatesResolver {
    findUniqueGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGift_certificatesArgs): Promise<Gift_certificates | null>;
}
