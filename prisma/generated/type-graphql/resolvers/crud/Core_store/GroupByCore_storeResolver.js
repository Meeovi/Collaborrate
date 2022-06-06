"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCore_storeArgs_1 = require("./args/GroupByCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const Core_storeGroupBy_1 = require("../../outputs/Core_storeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCore_storeResolver = class GroupByCore_storeResolver {
    async groupByCore_store(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Core_storeGroupBy_1.Core_storeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCore_storeArgs_1.GroupByCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCore_storeResolver.prototype, "groupByCore_store", null);
GroupByCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], GroupByCore_storeResolver);
exports.GroupByCore_storeResolver = GroupByCore_storeResolver;
