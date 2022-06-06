"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCore_storeArgs_1 = require("./args/AggregateCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const AggregateCore_store_1 = require("../../outputs/AggregateCore_store");
const helpers_1 = require("../../../helpers");
let AggregateCore_storeResolver = class AggregateCore_storeResolver {
    async aggregateCore_store(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCore_store_1.AggregateCore_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCore_storeArgs_1.AggregateCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCore_storeResolver.prototype, "aggregateCore_store", null);
AggregateCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], AggregateCore_storeResolver);
exports.AggregateCore_storeResolver = AggregateCore_storeResolver;
