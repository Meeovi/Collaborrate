import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsUpdateWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput", {
  isAbstract: true
})
export class OccassionsUpdateWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput, {
    nullable: false
  })
  data!: OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput;
}
