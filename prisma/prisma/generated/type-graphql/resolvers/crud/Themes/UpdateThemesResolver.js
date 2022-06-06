"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateThemesArgs_1 = require("./args/UpdateThemesArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let UpdateThemesResolver = class UpdateThemesResolver {
    async updateThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThemesArgs_1.UpdateThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateThemesResolver.prototype, "updateThemes", null);
UpdateThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], UpdateThemesResolver);
exports.UpdateThemesResolver = UpdateThemesResolver;
