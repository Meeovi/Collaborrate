import { GraphQLResolveInfo } from "graphql";
import { UpsertOneGift_certificatesArgs } from "./args/UpsertOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class UpsertOneGift_certificatesResolver {
    upsertOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneGift_certificatesArgs): Promise<Gift_certificates>;
}
