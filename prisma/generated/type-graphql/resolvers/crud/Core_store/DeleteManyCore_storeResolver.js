"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyCore_storeArgs_1 = require("./args/DeleteManyCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCore_storeResolver = class DeleteManyCore_storeResolver {
    async deleteManyCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCore_storeArgs_1.DeleteManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCore_storeResolver.prototype, "deleteManyCore_store", null);
DeleteManyCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], DeleteManyCore_storeResolver);
exports.DeleteManyCore_storeResolver = DeleteManyCore_storeResolver;
