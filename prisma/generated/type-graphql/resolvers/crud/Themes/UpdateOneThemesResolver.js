"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneThemesArgs_1 = require("./args/UpdateOneThemesArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let UpdateOneThemesResolver = class UpdateOneThemesResolver {
    async updateOneThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneThemesArgs_1.UpdateOneThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneThemesResolver.prototype, "updateOneThemes", null);
UpdateOneThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], UpdateOneThemesResolver);
exports.UpdateOneThemesResolver = UpdateOneThemesResolver;
