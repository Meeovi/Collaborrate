"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueGlossaryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueGlossaryArgs_1 = require("./args/FindUniqueGlossaryArgs");
const Glossary_1 = require("../../../models/Glossary");
const helpers_1 = require("../../../helpers");
let FindUniqueGlossaryResolver = class FindUniqueGlossaryResolver {
    async glossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Glossary_1.Glossary, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueGlossaryArgs_1.FindUniqueGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueGlossaryResolver.prototype, "glossary", null);
FindUniqueGlossaryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Glossary_1.Glossary)
], FindUniqueGlossaryResolver);
exports.FindUniqueGlossaryResolver = FindUniqueGlossaryResolver;
