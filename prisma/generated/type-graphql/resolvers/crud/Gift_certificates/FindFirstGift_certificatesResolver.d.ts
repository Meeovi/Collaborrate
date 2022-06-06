import { GraphQLResolveInfo } from "graphql";
import { FindFirstGift_certificatesArgs } from "./args/FindFirstGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class FindFirstGift_certificatesResolver {
    findFirstGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindFirstGift_certificatesArgs): Promise<Gift_certificates | null>;
}
