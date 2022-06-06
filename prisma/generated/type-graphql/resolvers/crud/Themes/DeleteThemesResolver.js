"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteThemesArgs_1 = require("./args/DeleteThemesArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let DeleteThemesResolver = class DeleteThemesResolver {
    async deleteThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThemesArgs_1.DeleteThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteThemesResolver.prototype, "deleteThemes", null);
DeleteThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], DeleteThemesResolver);
exports.DeleteThemesResolver = DeleteThemesResolver;
