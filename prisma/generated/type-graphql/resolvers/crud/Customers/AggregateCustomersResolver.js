"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCustomersArgs_1 = require("./args/AggregateCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const AggregateCustomers_1 = require("../../outputs/AggregateCustomers");
const helpers_1 = require("../../../helpers");
let AggregateCustomersResolver = class AggregateCustomersResolver {
    async aggregateCustomers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomers_1.AggregateCustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomersArgs_1.AggregateCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCustomersResolver.prototype, "aggregateCustomers", null);
AggregateCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], AggregateCustomersResolver);
exports.AggregateCustomersResolver = AggregateCustomersResolver;
