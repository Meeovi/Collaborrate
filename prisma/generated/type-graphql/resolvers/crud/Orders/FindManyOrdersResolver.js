"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyOrdersArgs_1 = require("./args/FindManyOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let FindManyOrdersResolver = class FindManyOrdersResolver {
    async findManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Orders_1.Orders], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOrdersArgs_1.FindManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyOrdersResolver.prototype, "findManyOrders", null);
FindManyOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], FindManyOrdersResolver);
exports.FindManyOrdersResolver = FindManyOrdersResolver;
