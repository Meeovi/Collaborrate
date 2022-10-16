"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCart_price_rulesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCart_price_rulesArgs_1 = require("./args/AggregateCart_price_rulesArgs");
const Cart_price_rules_1 = require("../../../models/Cart_price_rules");
const AggregateCart_price_rules_1 = require("../../outputs/AggregateCart_price_rules");
const helpers_1 = require("../../../helpers");
let AggregateCart_price_rulesResolver = class AggregateCart_price_rulesResolver {
    async aggregateCart_price_rules(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCart_price_rules_1.AggregateCart_price_rules, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCart_price_rulesArgs_1.AggregateCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCart_price_rulesResolver.prototype, "aggregateCart_price_rules", null);
AggregateCart_price_rulesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cart_price_rules_1.Cart_price_rules)
], AggregateCart_price_rulesResolver);
exports.AggregateCart_price_rulesResolver = AggregateCart_price_rulesResolver;
