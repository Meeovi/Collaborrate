"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Themes_1 = require("../../../models/Themes");
const Websites_1 = require("../../../models/Websites");
const helpers_1 = require("../../../helpers");
let ThemesRelationsResolver = class ThemesRelationsResolver {
    async websites(themes, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findUnique({
            where: {
                id: themes.id,
            },
        }).websites({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Websites_1.Websites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Themes_1.Themes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesRelationsResolver.prototype, "websites", null);
ThemesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], ThemesRelationsResolver);
exports.ThemesRelationsResolver = ThemesRelationsResolver;
