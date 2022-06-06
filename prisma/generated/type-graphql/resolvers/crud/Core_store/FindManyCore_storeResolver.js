"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCore_storeArgs_1 = require("./args/FindManyCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const helpers_1 = require("../../../helpers");
let FindManyCore_storeResolver = class FindManyCore_storeResolver {
    async core_stores(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Core_store_1.Core_store], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCore_storeArgs_1.FindManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCore_storeResolver.prototype, "core_stores", null);
FindManyCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], FindManyCore_storeResolver);
exports.FindManyCore_storeResolver = FindManyCore_storeResolver;
