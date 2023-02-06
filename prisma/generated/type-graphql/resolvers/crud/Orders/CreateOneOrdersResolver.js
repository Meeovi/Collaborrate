"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneOrdersArgs_1 = require("./args/CreateOneOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let CreateOneOrdersResolver = class CreateOneOrdersResolver {
    async createOneOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOrdersArgs_1.CreateOneOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneOrdersResolver.prototype, "createOneOrders", null);
CreateOneOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], CreateOneOrdersResolver);
exports.CreateOneOrdersResolver = CreateOneOrdersResolver;
