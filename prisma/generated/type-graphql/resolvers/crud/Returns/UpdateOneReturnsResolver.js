"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneReturnsArgs_1 = require("./args/UpdateOneReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let UpdateOneReturnsResolver = class UpdateOneReturnsResolver {
    async updateOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneReturnsArgs_1.UpdateOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneReturnsResolver.prototype, "updateOneReturns", null);
UpdateOneReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], UpdateOneReturnsResolver);
exports.UpdateOneReturnsResolver = UpdateOneReturnsResolver;
