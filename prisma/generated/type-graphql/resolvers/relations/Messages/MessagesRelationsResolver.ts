import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Messages } from "../../../models/Messages";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Messages)
export class MessagesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() messages: Messages, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).messages.findUnique({
      where: {
        id: messages.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: true
  })
  async users(@TypeGraphQL.Root() messages: Messages, @TypeGraphQL.Ctx() ctx: any): Promise<Users | null> {
    return getPrismaFromContext(ctx).messages.findUnique({
      where: {
        id: messages.id,
      },
    }).users({});
  }
}
