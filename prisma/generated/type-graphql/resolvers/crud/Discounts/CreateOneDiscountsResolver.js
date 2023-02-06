"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneDiscountsArgs_1 = require("./args/CreateOneDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let CreateOneDiscountsResolver = class CreateOneDiscountsResolver {
    async createOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDiscountsArgs_1.CreateOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneDiscountsResolver.prototype, "createOneDiscounts", null);
CreateOneDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], CreateOneDiscountsResolver);
exports.CreateOneDiscountsResolver = CreateOneDiscountsResolver;
