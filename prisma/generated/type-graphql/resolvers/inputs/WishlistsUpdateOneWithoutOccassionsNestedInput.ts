import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsCreateOrConnectWithoutOccassionsInput } from "../inputs/WishlistsCreateOrConnectWithoutOccassionsInput";
import { WishlistsCreateWithoutOccassionsInput } from "../inputs/WishlistsCreateWithoutOccassionsInput";
import { WishlistsUpdateWithoutOccassionsInput } from "../inputs/WishlistsUpdateWithoutOccassionsInput";
import { WishlistsUpsertWithoutOccassionsInput } from "../inputs/WishlistsUpsertWithoutOccassionsInput";
import { WishlistsWhereUniqueInput } from "../inputs/WishlistsWhereUniqueInput";

@TypeGraphQL.InputType("WishlistsUpdateOneWithoutOccassionsNestedInput", {
  isAbstract: true
})
export class WishlistsUpdateOneWithoutOccassionsNestedInput {
  @TypeGraphQL.Field(_type => WishlistsCreateWithoutOccassionsInput, {
    nullable: true
  })
  create?: WishlistsCreateWithoutOccassionsInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsCreateOrConnectWithoutOccassionsInput, {
    nullable: true
  })
  connectOrCreate?: WishlistsCreateOrConnectWithoutOccassionsInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsUpsertWithoutOccassionsInput, {
    nullable: true
  })
  upsert?: WishlistsUpsertWithoutOccassionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: true
  })
  connect?: WishlistsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsUpdateWithoutOccassionsInput, {
    nullable: true
  })
  update?: WishlistsUpdateWithoutOccassionsInput | undefined;
}
