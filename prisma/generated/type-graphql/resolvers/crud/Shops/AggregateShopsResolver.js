"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateShopsArgs_1 = require("./args/AggregateShopsArgs");
const Shops_1 = require("../../../models/Shops");
const AggregateShops_1 = require("../../outputs/AggregateShops");
const helpers_1 = require("../../../helpers");
let AggregateShopsResolver = class AggregateShopsResolver {
    async aggregateShops(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShops_1.AggregateShops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShopsArgs_1.AggregateShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateShopsResolver.prototype, "aggregateShops", null);
AggregateShopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shops_1.Shops)
], AggregateShopsResolver);
exports.AggregateShopsResolver = AggregateShopsResolver;
