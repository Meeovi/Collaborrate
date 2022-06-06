"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomerArgs_1 = require("./args/AggregateCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const AggregateCustomer_1 = require("../../outputs/AggregateCustomer");
const helpers_1 = require("../../../helpers");
let AggregateCustomerResolver = class AggregateCustomerResolver {
    async aggregateCustomer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_1.AggregateCustomer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomerArgs_1.AggregateCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCustomerResolver.prototype, "aggregateCustomer", null);
AggregateCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], AggregateCustomerResolver);
exports.AggregateCustomerResolver = AggregateCustomerResolver;
