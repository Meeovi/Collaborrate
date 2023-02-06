"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueOrdersArgs_1 = require("./args/FindUniqueOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let FindUniqueOrdersResolver = class FindUniqueOrdersResolver {
    async findUniqueOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrdersArgs_1.FindUniqueOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOrdersResolver.prototype, "findUniqueOrders", null);
FindUniqueOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], FindUniqueOrdersResolver);
exports.FindUniqueOrdersResolver = FindUniqueOrdersResolver;
