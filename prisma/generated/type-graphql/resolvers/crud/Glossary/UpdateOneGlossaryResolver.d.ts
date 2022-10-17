import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGlossaryArgs } from "./args/UpdateOneGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class UpdateOneGlossaryResolver {
    updateOneGlossary(ctx: any, info: GraphQLResolveInfo, args: UpdateOneGlossaryArgs): Promise<Glossary | null>;
}
