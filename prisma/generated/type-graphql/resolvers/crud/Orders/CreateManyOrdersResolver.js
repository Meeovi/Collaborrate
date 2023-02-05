"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyOrdersArgs_1 = require("./args/CreateManyOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyOrdersResolver = class CreateManyOrdersResolver {
    async createManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOrdersArgs_1.CreateManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyOrdersResolver.prototype, "createManyOrders", null);
CreateManyOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], CreateManyOrdersResolver);
exports.CreateManyOrdersResolver = CreateManyOrdersResolver;
