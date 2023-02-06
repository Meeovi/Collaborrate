"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneOrdersArgs_1 = require("./args/DeleteOneOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let DeleteOneOrdersResolver = class DeleteOneOrdersResolver {
    async deleteOneOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOrdersArgs_1.DeleteOneOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneOrdersResolver.prototype, "deleteOneOrders", null);
DeleteOneOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], DeleteOneOrdersResolver);
exports.DeleteOneOrdersResolver = DeleteOneOrdersResolver;
