import { GraphQLResolveInfo } from "graphql";
import { FindManyGift_certificatesArgs } from "./args/FindManyGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class FindManyGift_certificatesResolver {
    findManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindManyGift_certificatesArgs): Promise<Gift_certificates[]>;
}
