"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyCore_storeArgs_1 = require("./args/UpdateManyCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCore_storeResolver = class UpdateManyCore_storeResolver {
    async updateManyCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCore_storeArgs_1.UpdateManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCore_storeResolver.prototype, "updateManyCore_store", null);
UpdateManyCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], UpdateManyCore_storeResolver);
exports.UpdateManyCore_storeResolver = UpdateManyCore_storeResolver;
