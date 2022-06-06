"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOrdersArgs_1 = require("./args/UpsertOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let UpsertOrdersResolver = class UpsertOrdersResolver {
    async upsertOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOrdersArgs_1.UpsertOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOrdersResolver.prototype, "upsertOrders", null);
UpsertOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], UpsertOrdersResolver);
exports.UpsertOrdersResolver = UpsertOrdersResolver;
