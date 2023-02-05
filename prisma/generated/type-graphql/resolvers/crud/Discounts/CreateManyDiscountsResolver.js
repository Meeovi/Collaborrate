"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyDiscountsArgs_1 = require("./args/CreateManyDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyDiscountsResolver = class CreateManyDiscountsResolver {
    async createManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDiscountsArgs_1.CreateManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyDiscountsResolver.prototype, "createManyDiscounts", null);
CreateManyDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], CreateManyDiscountsResolver);
exports.CreateManyDiscountsResolver = CreateManyDiscountsResolver;
