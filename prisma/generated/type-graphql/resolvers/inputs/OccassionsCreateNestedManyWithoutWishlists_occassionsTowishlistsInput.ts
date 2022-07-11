import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope } from "../inputs/OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope";
import { OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsCreateWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsCreateNestedManyWithoutWishlists_occassionsTowishlistsInput", {
  isAbstract: true
})
export class OccassionsCreateNestedManyWithoutWishlists_occassionsTowishlistsInput {
  @TypeGraphQL.Field(_type => [OccassionsCreateWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  create?: OccassionsCreateWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  connectOrCreate?: OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope, {
    nullable: true
  })
  createMany?: OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  connect?: OccassionsWhereUniqueInput[] | undefined;
}
