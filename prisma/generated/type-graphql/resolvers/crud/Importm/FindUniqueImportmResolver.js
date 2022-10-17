"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueImportmResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueImportmArgs_1 = require("./args/FindUniqueImportmArgs");
const Importm_1 = require("../../../models/Importm");
const helpers_1 = require("../../../helpers");
let FindUniqueImportmResolver = class FindUniqueImportmResolver {
    async importm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueImportmArgs_1.FindUniqueImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueImportmResolver.prototype, "importm", null);
FindUniqueImportmResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], FindUniqueImportmResolver);
exports.FindUniqueImportmResolver = FindUniqueImportmResolver;
