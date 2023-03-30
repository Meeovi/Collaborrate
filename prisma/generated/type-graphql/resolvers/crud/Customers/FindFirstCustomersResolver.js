"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCustomersArgs_1 = require("./args/FindFirstCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let FindFirstCustomersResolver = class FindFirstCustomersResolver {
    async findFirstCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomersArgs_1.FindFirstCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCustomersResolver.prototype, "findFirstCustomers", null);
FindFirstCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], FindFirstCustomersResolver);
exports.FindFirstCustomersResolver = FindFirstCustomersResolver;
