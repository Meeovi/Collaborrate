"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteImportmResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteImportmArgs_1 = require("./args/DeleteImportmArgs");
const Importm_1 = require("../../../models/Importm");
const helpers_1 = require("../../../helpers");
let DeleteImportmResolver = class DeleteImportmResolver {
    async deleteImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteImportmArgs_1.DeleteImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteImportmResolver.prototype, "deleteImportm", null);
DeleteImportmResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], DeleteImportmResolver);
exports.DeleteImportmResolver = DeleteImportmResolver;
