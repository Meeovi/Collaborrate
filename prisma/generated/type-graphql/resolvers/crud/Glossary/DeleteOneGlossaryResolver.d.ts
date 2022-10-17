import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGlossaryArgs } from "./args/DeleteOneGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class DeleteOneGlossaryResolver {
    deleteOneGlossary(ctx: any, info: GraphQLResolveInfo, args: DeleteOneGlossaryArgs): Promise<Glossary | null>;
}
