"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCore_storeArgs_1 = require("./args/UpdateCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const helpers_1 = require("../../../helpers");
let UpdateCore_storeResolver = class UpdateCore_storeResolver {
    async updateCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCore_storeArgs_1.UpdateCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCore_storeResolver.prototype, "updateCore_store", null);
UpdateCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], UpdateCore_storeResolver);
exports.UpdateCore_storeResolver = UpdateCore_storeResolver;
