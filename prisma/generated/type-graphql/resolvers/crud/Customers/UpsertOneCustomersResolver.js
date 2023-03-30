"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCustomersArgs_1 = require("./args/UpsertOneCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let UpsertOneCustomersResolver = class UpsertOneCustomersResolver {
    async upsertOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCustomersArgs_1.UpsertOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCustomersResolver.prototype, "upsertOneCustomers", null);
UpsertOneCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], UpsertOneCustomersResolver);
exports.UpsertOneCustomersResolver = UpsertOneCustomersResolver;
