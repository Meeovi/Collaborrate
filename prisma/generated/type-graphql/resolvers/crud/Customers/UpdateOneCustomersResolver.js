"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCustomersArgs_1 = require("./args/UpdateOneCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let UpdateOneCustomersResolver = class UpdateOneCustomersResolver {
    async updateOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCustomersArgs_1.UpdateOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCustomersResolver.prototype, "updateOneCustomers", null);
UpdateOneCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], UpdateOneCustomersResolver);
exports.UpdateOneCustomersResolver = UpdateOneCustomersResolver;
