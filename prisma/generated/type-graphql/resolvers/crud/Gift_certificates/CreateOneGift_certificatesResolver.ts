import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneGift_certificatesArgs } from "./args/CreateOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gift_certificates)
export class CreateOneGift_certificatesResolver {
  @TypeGraphQL.Mutation(_returns => Gift_certificates, {
    nullable: false
  })
  async createOneGift_certificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGift_certificatesArgs): Promise<Gift_certificates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).gift_certificates.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
