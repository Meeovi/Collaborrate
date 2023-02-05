"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCustomersArgs_1 = require("./args/DeleteOneCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let DeleteOneCustomersResolver = class DeleteOneCustomersResolver {
    async deleteOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCustomersArgs_1.DeleteOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCustomersResolver.prototype, "deleteOneCustomers", null);
DeleteOneCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], DeleteOneCustomersResolver);
exports.DeleteOneCustomersResolver = DeleteOneCustomersResolver;
