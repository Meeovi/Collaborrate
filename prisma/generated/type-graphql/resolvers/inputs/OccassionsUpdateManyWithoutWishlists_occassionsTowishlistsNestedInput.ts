import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope } from "../inputs/OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope";
import { OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsCreateWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsScalarWhereInput } from "../inputs/OccassionsScalarWhereInput";
import { OccassionsUpdateManyWithWhereWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsUpdateManyWithWhereWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsUpdateWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsUpdateWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsUpsertWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsUpsertWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsUpdateManyWithoutWishlists_occassionsTowishlistsNestedInput", {
  isAbstract: true
})
export class OccassionsUpdateManyWithoutWishlists_occassionsTowishlistsNestedInput {
  @TypeGraphQL.Field(_type => [OccassionsCreateWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  create?: OccassionsCreateWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  connectOrCreate?: OccassionsCreateOrConnectWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsUpsertWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  upsert?: OccassionsUpsertWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope, {
    nullable: true
  })
  createMany?: OccassionsCreateManyWishlists_occassionsTowishlistsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  set?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  delete?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsWhereUniqueInput], {
    nullable: true
  })
  connect?: OccassionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsUpdateWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  update?: OccassionsUpdateWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsUpdateManyWithWhereWithoutWishlists_occassionsTowishlistsInput], {
    nullable: true
  })
  updateMany?: OccassionsUpdateManyWithWhereWithoutWishlists_occassionsTowishlistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OccassionsScalarWhereInput[] | undefined;
}
