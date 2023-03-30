"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByVendorsArgs_1 = require("./args/GroupByVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const VendorsGroupBy_1 = require("../../outputs/VendorsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByVendorsResolver = class GroupByVendorsResolver {
    async groupByVendors(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VendorsGroupBy_1.VendorsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVendorsArgs_1.GroupByVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByVendorsResolver.prototype, "groupByVendors", null);
GroupByVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], GroupByVendorsResolver);
exports.GroupByVendorsResolver = GroupByVendorsResolver;
