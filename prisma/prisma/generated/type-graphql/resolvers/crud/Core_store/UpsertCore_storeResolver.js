"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCore_storeArgs_1 = require("./args/UpsertCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const helpers_1 = require("../../../helpers");
let UpsertCore_storeResolver = class UpsertCore_storeResolver {
    async upsertCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCore_storeArgs_1.UpsertCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCore_storeResolver.prototype, "upsertCore_store", null);
UpsertCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], UpsertCore_storeResolver);
exports.UpsertCore_storeResolver = UpsertCore_storeResolver;
