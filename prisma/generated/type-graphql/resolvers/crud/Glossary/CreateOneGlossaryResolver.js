"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneGlossaryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneGlossaryArgs_1 = require("./args/CreateOneGlossaryArgs");
const Glossary_1 = require("../../../models/Glossary");
const helpers_1 = require("../../../helpers");
let CreateOneGlossaryResolver = class CreateOneGlossaryResolver {
    async createOneGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneGlossaryArgs_1.CreateOneGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneGlossaryResolver.prototype, "createOneGlossary", null);
CreateOneGlossaryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Glossary_1.Glossary)
], CreateOneGlossaryResolver);
exports.CreateOneGlossaryResolver = CreateOneGlossaryResolver;
