"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Themes_1 = require("../../../models/Themes");
const Websites_1 = require("../../../models/Websites");
const WebsitesThemesArgs_1 = require("./args/WebsitesThemesArgs");
const helpers_1 = require("../../../helpers");
let WebsitesRelationsResolver = class WebsitesRelationsResolver {
    async themes(websites, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.findUnique({
            where: {
                id: websites.id,
            },
        }).themes(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Themes_1.Themes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Websites_1.Websites, Object, WebsitesThemesArgs_1.WebsitesThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesRelationsResolver.prototype, "themes", null);
WebsitesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], WebsitesRelationsResolver);
exports.WebsitesRelationsResolver = WebsitesRelationsResolver;
