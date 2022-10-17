"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyImportmResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyImportmArgs_1 = require("./args/FindManyImportmArgs");
const Importm_1 = require("../../../models/Importm");
const helpers_1 = require("../../../helpers");
let FindManyImportmResolver = class FindManyImportmResolver {
    async importms(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Importm_1.Importm], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyImportmArgs_1.FindManyImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyImportmResolver.prototype, "importms", null);
FindManyImportmResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], FindManyImportmResolver);
exports.FindManyImportmResolver = FindManyImportmResolver;
