"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneInternalizationArgs_1 = require("./args/DeleteOneInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const helpers_1 = require("../../../helpers");
let DeleteOneInternalizationResolver = class DeleteOneInternalizationResolver {
    async deleteOneInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInternalizationArgs_1.DeleteOneInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneInternalizationResolver.prototype, "deleteOneInternalization", null);
DeleteOneInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], DeleteOneInternalizationResolver);
exports.DeleteOneInternalizationResolver = DeleteOneInternalizationResolver;
