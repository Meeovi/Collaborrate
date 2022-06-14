import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGift_certificatesArgs } from "./args/AggregateGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { AggregateGift_certificates } from "../../outputs/AggregateGift_certificates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gift_certificates)
export class AggregateGift_certificatesResolver {
  @TypeGraphQL.Query(_returns => AggregateGift_certificates, {
    nullable: false
  })
  async aggregateGift_certificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGift_certificatesArgs): Promise<AggregateGift_certificates> {
    return getPrismaFromContext(ctx).gift_certificates.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
