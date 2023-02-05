"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneInternalizationArgs_1 = require("./args/UpdateOneInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const helpers_1 = require("../../../helpers");
let UpdateOneInternalizationResolver = class UpdateOneInternalizationResolver {
    async updateOneInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInternalizationArgs_1.UpdateOneInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneInternalizationResolver.prototype, "updateOneInternalization", null);
UpdateOneInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], UpdateOneInternalizationResolver);
exports.UpdateOneInternalizationResolver = UpdateOneInternalizationResolver;
