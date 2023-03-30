"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyThemesArgs_1 = require("./args/UpdateManyThemesArgs");
const Themes_1 = require("../../../models/Themes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyThemesResolver = class UpdateManyThemesResolver {
    async updateManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThemesArgs_1.UpdateManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyThemesResolver.prototype, "updateManyThemes", null);
UpdateManyThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], UpdateManyThemesResolver);
exports.UpdateManyThemesResolver = UpdateManyThemesResolver;
