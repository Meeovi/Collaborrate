"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomer_groupArgs_1 = require("./args/AggregateCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const AggregateCustomer_group_1 = require("../../outputs/AggregateCustomer_group");
const helpers_1 = require("../../../helpers");
let AggregateCustomer_groupResolver = class AggregateCustomer_groupResolver {
    async aggregateCustomer_group(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_group_1.AggregateCustomer_group, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomer_groupArgs_1.AggregateCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCustomer_groupResolver.prototype, "aggregateCustomer_group", null);
AggregateCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], AggregateCustomer_groupResolver);
exports.AggregateCustomer_groupResolver = AggregateCustomer_groupResolver;
