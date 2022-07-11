import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneTicketingArgs } from "./args/CreateOneTicketingArgs";
import { Ticketing } from "../../../models/Ticketing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ticketing)
export class CreateOneTicketingResolver {
  @TypeGraphQL.Mutation(_returns => Ticketing, {
    nullable: false
  })
  async createOneTicketing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTicketingArgs): Promise<Ticketing> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).ticketing.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
